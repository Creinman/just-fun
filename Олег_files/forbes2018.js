//вычислеие ширины вертикального скролла у браузера
var div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width =  '50px';
div.style.height = '50px';
div.style.visibility = 'hidden';
document.body.appendChild(div);
var scrollWidth = div.offsetWidth - div.clientWidth;
document.body.removeChild(div);

var scroll,
    topToPage,
    topToWindow,
    toPopUpScroll,
    //headerMenuHeight = $('.main-menu-list-js').height(),
    //menuToBot = $('.main-menu-list-js').offset().top + $('.main-menu-list-js').height(),
    //headerToBot = $('.header-menu-js').offset().top + $('.header-menu-js').height(),
    //headerMenuPaddingRight = $('.header-menu-js').css("padding-right"),
    summHeaderMenuPaddingRight;



if ($(window).width() >= 1025) {
    $(document).scroll(function () {
        //showBtnOpenMenu();
    });
}
$(window).on('resize', function() {
    if ($(window).width() >= 1025) {
        $(document).scroll(function () {
            //showBtnOpenMenu();
        });
    }
    //headerMenuPaddingRight = $('.header-menu-js').css("padding-right");
});

var modalOpened = false,
    searchFormOpened = false;

// показ-скрытие кнопки раскрытия доп. меню при скроле страницы
// window.showBtnOpenMenu = function(offset) {
//     headerToBot = ($('.header').offset().top || offset);
//     if (document.documentElement.scrollTop >= headerToBot) {
//         $('.btn-open-menu-js').removeClass('display-none');
//         $('.header-nav-menu-js').append($('.main-menu-list'));
//         //$('body').css("padding-top", headerMenuHeight + "px");
//     } else {
//         $('.btn-open-menu-js').addClass('display-none');
//         $('.wrap-main-menu-list-js').append($('.main-menu-list'));
//         //$('body').css("padding-top", "0px");
//         $(".header-nav-menu-js").slideUp(200);
//     }
// };
// открытие доп. меню
// $('.btn-open-menu-js').on('click', function (e) {
//     e.preventDefault();
//     $(".header-nav-menu-js").slideToggle(200);
// });

// открытие строки поиска
// $('.btn-search-js').on('click', function (e) {
//     e.preventDefault();
//
//     $('body').addClass('search-opened');
//     $('.header-menu-search-2018-js').find('input[type="text"]').focus();
//     $('.header-nav-menu-js').slideUp(1);
//
//     searchFormOpened = true;
// });

// скрытие строки поиска
// $('.btn-close-js').on('click', function (e) {
//     e.preventDefault();
//
//     $('body').removeClass('search-opened');
//
//     searchFormOpened = false;
// });

$('.readers-choice-select-js').select2({
    customClass: "myselectbox",
    placeholder: "ЗА СЕГОДНЯ",
    allowClear : false,
    minimumResultsForSearch: -1,
    width: 'resolve'
});

// показать модальное меню
// $('.btn-burger-js').on('click', function () {
//     topToPage = $(this).offset().top;
//     topToWindow = this.getBoundingClientRect().top;
//     toPopUpScroll = topToPage - topToWindow;
//     summHeaderMenuPaddingRight = parseInt(headerMenuPaddingRight) + scrollWidth;
//     $('body').addClass('modal-opened');
//
//     $('.header-menu-js').css("padding-right", summHeaderMenuPaddingRight + "px" );
//
//     modalOpened = true;
// });

// скрыть модальное меню
$('.btn-close-modal-menu-js').on('click', function () {
    $('body').removeClass('modal-opened');

    $('.header-menu-js').css("padding-right", "");

    setTimeout ( function() {
        $('html, body').scrollTop(toPopUpScroll)
    }, 1 );

    modalOpened = false;
});

var moreNodesUrl = '/rest/node/list';
$('.load-more-nodes').click(function(e) {
    e.preventDefault();

    var $this = $(this),
        $loader = $this.siblings('.show-more-loader');

    var $target = $($this.data('target')),
        $cont = $($this.data('container')),
        $contTarget = $($this.data('container-target')),
        section = $this.data('section'),
        chunks = ($this.data('chunks') || '').split(','),
        template = $this.data('template').split(','),
        imageSize = ($this.data('image-size') || '').split(','),
        limit = $this.data('size'),
        page = $(this).data('page') ? $(this).data('page') : 0,
        offset = $(this).data('offset') ? $(this).data('offset') : 0,
        nidsType = $(this).data('nids-type') ? $(this).data('nids-type') : '',
        excludeQueue = $(this).data('exclude-queue') ? $(this).data('exclude-queue') : 0,
        mobileClipped = $(this).data('mobile-clipped') ? 1 : 0,
        selectSections = $(this).data('select-sections') ? 1 : 0,
        selectAuthors = $(this).data('select-authors') ? 1 : 0,
        moreNodesUrl = $(this).data('url') ? $(this).data('url') : '/rest/node/list',
        sort = $(this).data('sort') ? $(this).data('sort') : '',
        authorNid = $(this).data('author-nid') ? $(this).data('author-nid') : '',
        queue = $(this).data('queue') ? $(this).data('queue') : '';

    if (mobileClipped) {
        $target.addClass('mobile-more-loaded');

        if ($(window).width() < 560) { //mobile
            $(this).data('mobile-clipped', 0);
            return;
        }
    }

    if (chunks.length === 1) {
        chunks = chunks[0];
    }
    if (imageSize.length === 1) {
        imageSize = imageSize[0];
    }
    if (template.length === 1) {
        template = template[0];
    }

    $this.hide();
    $loader.show();

    $.ajax({
        url: moreNodesUrl,
        data: {
            section: section,
            template: template,
            chunks: chunks,
            image_size: imageSize,
            limit: limit,
            page: page,
            offset: offset,
            nids_type: nidsType,
            exclude_queue: excludeQueue,
            select_sections: selectSections,
            select_authors: selectAuthors,
            authorNid: authorNid,
            sort: sort,
            queue: queue
        },
        success: function (data) {
            $loader.hide();

            if (!data.length) {
                $this.remove();
                return;
            }

            var $insertTarget;
            if ($cont.length && $contTarget.length) {
                var $newTarget = $cont.clone();
                $contTarget.append($newTarget);
                $newTarget.show();

                $insertTarget = $($this.data('target'), $newTarget);
            } else {
                $insertTarget = $target;
            }

            $.each(data, function (i, e) {
                var $appendTarget = calcLoadMoreAppendTarget(i, chunks, $insertTarget);
                $appendTarget.append(e);
            });

            if (data.length < limit) {
                $this.remove();
                return;
            }

            $this.show();
            $this.data('page', ++page);
        }
    });
});

$('.load-more-terms').click(function(e) {
    e.preventDefault();

    var moreTermsUrl = '/rest/term/list';

    var $this = $(this),
        $loader = $this.siblings('.show-more-loader');

    var $target = $($this.data('target')),
        vid = $this.data('vid'),
        template = $this.data('template'),
        imageSize = ($this.data('image-size') || ''),
        limit = $this.data('size'),
        page = $(this).data('page') ? $(this).data('page') : 0,
        offset = $(this).data('offset') ? $(this).data('offset') : 0;

    $this.hide();
    $loader.show();

    $.ajax({
        url: moreTermsUrl,
        data: {
            vid: vid,
            template: template,
            image_size: imageSize,
            limit: limit,
            page: page,
            offset: offset,
        },
        success: function (data) {
            $loader.hide();

            if (!data.length) {
                $this.remove();
                return;
            }

            $.each(data, function (i, e) {
                $target.append(e);
            });

            if (data.length < limit) {
                $this.remove();
                return;
            }

            $this.show();
            $this.data('page', ++page);
        }
    });
});



$('.load-more-nodes-local').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    var count = $this.data('count'),
        size = $this.data('size'),
        items = $($this.data('items')),
        page = $(this).data('page') ? $(this).data('page') : 1;

    var offset = page * size;

    for (var i = offset; (i < (offset + size) && i < count); i++) {
        items.eq(i).show();
    }

    if (i < count) {
        $this.data('page', ++page);
    } else {
        $this.remove();
    }
});

function calcLoadMoreAppendTarget(index, chunks, $targets) {
    if ($targets.length === 1) {
        return $targets;
    }

    if (!chunks || chunks.length === 1) {
        return $targets;
    }

    var chunkIndex = 0;
    for (var ci = 0; ci < chunks.length; ci++) {
        var chunkLength = chunks[ci];

        if (index >= chunkIndex && index <= chunkIndex + (chunkLength - 1) ) {
            return $targets.eq(ci);
        }

        chunkIndex = chunkLength;
    }

    return $targets.eq(0);
}

var brandvoiceSubscribing = false;
$('#brandvoice_subscribe').on('submit', function (e) {
    e.preventDefault();
    if (brandvoiceSubscribing) {
        return;
    }
    brandvoiceSubscribing = true;

    $('#brandvoice_subscribe_message').empty().css('color', 'inherit');
    $('#brandvoice_subscribe_loader').show();

    var email = $('#brandvoice_subscribe_input').val();
    var type = $('#brandvoice_subscribe').data('type');
    var id = $('#brandvoice_subscribe').data('id');

    var checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email || !checkEmail.test(email)) {
        $('#brandvoice_subscribe_loader').hide();
        $('#brandvoice_subscribe_message').text('Введен некорректный email').css('color', '#bf2a26');
        brandvoiceSubscribing = false;
    }

    if (!type || !id) {
        $('#brandvoice_subscribe_loader').hide();
        $('#brandvoice_subscribe_message').text('Не указан идентификатор. Пожалуйста, обратитесь к администратору сайту').css('color', '#bf2a26');
        brandvoiceSubscribing = false;
    }

    $.ajax({
        type: 'POST',
        url: '/admin/unisender/subscribe',
        data: {
            'email':email,
            'id':id,
            'type':type
        },
        success: function (data) {
            $('#brandvoice_subscribe_loader').hide();
            $('#brandvoice_subscribe_message').text('Спасибо за подписку').css('color', '#47bf42');
            brandvoiceSubscribing = false;
        },
    });
});

var dlh = decodeURIComponent(document.location.pathname);
var slideIndex = 0;
var $slider1 = $('.slider-serial-js');

if (dlh != ''){
    var myRe = /\d+/;
    resultRegexpFindEpisode = myRe.exec(dlh);

    if (resultRegexpFindEpisode) {
        slideIndex = $slider1.find('.item-slide[data-id="'+resultRegexpFindEpisode[0]+'"]').index();
    }
$slider1.slick({
    initialSlide: slideIndex,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    lazyLoad: 'ondemand',
    draggable: false,
    prevArrow: '<div class="slick-prev" title="Назад"></div>',
    nextArrow: '<div class="slick-next" title="Вперед"></div>',
    infinite: true,
    fade: true,
});
}

$('.slider-serial-js').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var currentSlideElement = $('.slider-serial-js .slick-current');
    var url = 'https://'+window.location.hostname+'/'+currentSlideElement.data('url');

    $('link[rel="canonical"]').attr('href', url);
    $('meta[property="og:url"]').attr('content', url);
    history.pushState('', '', url);
});

// аккордеон показать больше об авторе секции .author-block
$('.btn-open-info-js').on('click', function(){
    var $this = $(this);
    if (!$this.hasClass('hide')){
        $this.addClass('hide').next('.text').slideUp();
    } else {
        $this.removeClass('hide').next('.text').slideDown();
    }
});

// аккордеон-1
$('.btn-accordion-1-js').on('click', function(){
    var $this = $(this);
    if (!$this.hasClass('hide')){
        $this.addClass('hide').next('.text').slideUp();
    } else {
        $this.removeClass('hide').next('.text').slideDown();
    }
});

// функция перелистывания слайдера по клику на ссылку

$(function() {
    //Вешаем обработчики
    var addListeners = function(slider) {
        var $buttons = $('.toggle-slick');

        $buttons.on('click', function(e) {
            e.preventDefault();
            var $target = $('#serial-slider');
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 60
            }, 600, 'swing', function () {
            });
            var slide = $(this).attr('data-slide');

            slider.slick('slickGoTo', slide);
        })
    };

    //Инициализируем слайдер
    var init = function() {
        var $slickContainer = $('.slider-serial-js');

        //Обработчик события init
        $slickContainer.on('init', function(event, slick, currentSlide, nextSlide) {
            var $slider = $(this);

            addListeners($slider);
        });

        // Инициализация слайдера
        $('.slider-serial-js').slick({
            initialSlide: slideIndex,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            lazyLoad: 'ondemand',
            draggable: false,
            prevArrow: '<div class="slick-prev" title="Назад"></div>',
            nextArrow: '<div class="slick-next" title="Вперед"></div>',
            infinite: true,
            fade: true,
        });
    };
    init();
});
$('.link-section-js').on('click', function(e){
    e.preventDefault();
    $(this).parents('.section-list').find('a').removeClass('active');
    $(this).addClass('active');
    $('.load-more-nodes').data('time', $(this).data('time'));

    var blockName = $(this).data('person-nodes');
    $('.block-href-material').addClass('hide');
    $('.block-href-material[data-person-nodes="' + blockName + '"]').removeClass('hide');

    $('.btn-show-more-articles').addClass('hide');
    $('.btn-show-more-articles[data-person-nodes="' + blockName + '"]').removeClass('hide');

});

 // тест 15years Forbes

var colQuestions = $('.questions-js').length,
    counterQuestions = 0,
    colCorrectAnswer = 0;
//  клик по кнопке начать тест
$('.btn-start-test').on('click', function () {
    $('.start-page-test-js').addClass('display-none');
    $('.test-questions-js').removeClass('display-none');
});
// клик по кнопке выбора ответа
$('.btn-answers-js').on('click', function () {
    chosenAnswer($(this));
});

// функция проверки на корректность ответа
function chosenAnswer(answer) {
    counterQuestions ++;
    answer.addClass('active');
    $('.btn-answers-js').off('click');
    answer.parent('li').siblings().addClass('display-none');
    answer.parents('.list-answers').siblings('.wrap-img').find('.img-questions-js').removeClass('blur');
    if ( answer.hasClass('btn-answers-true') ) {
        chosenCorrectAnswer(answer);
    } else {
        chosenWrongAnswer(answer);
    }
};
// функция выбора правильного ответа
function chosenCorrectAnswer(btn) {
    colCorrectAnswer ++;
    btn.addClass('btn-answers--blue');
    btn.parents('.list-answers').siblings('.response-information-true-js').removeClass('display-none');
    btn.parents('.list-answers').siblings('.btn-next-question-js').removeClass('display-none');
};
// функция выбора неправильного ответа
function chosenWrongAnswer(btn) {
    btn.addClass('btn-answers--red');
    btn.parents('.list-answers').siblings('.response-information-false-js').removeClass('display-none');
    btn.parents('.list-answers').siblings('.btn-next-question-js').removeClass('display-none');
};
// клик по кнопке, перехода к следующему вопросу
$('.btn-next-question-js').on('click', function () {
    if (counterQuestions < colQuestions) {
        openNextQuestion($(this));
    } else if (colCorrectAnswer <= 3) {
        $(this).parents('.questions-js').addClass('display-none');
        $('.list-questions-js').addClass('display-none');
        $('.end-page-test-satisfactorily-js').removeClass('display-none');
        } else if (colCorrectAnswer <= 6) {
            $(this).parents('.questions-js').addClass('display-none');
            $('.list-questions-js').addClass('display-none');
            $('.end-page-test-well-js').removeClass('display-none');
            } else {
                $(this).parents('.questions-js').toggleClass('display-none');
                $('.list-questions-js').toggleClass('display-none');
                $('.end-page-test-fine-js').removeClass('display-none');
                }
});
// функция открытия следующего вопроса
function openNextQuestion(btn) {
    btn.parents('.questions-js').addClass('display-none').next('.questions-js').removeClass('display-none');
    $('.btn-answers-js').on('click', function () {
        chosenAnswer($(this));
    });
};
// клик по кнопке пройти тест еще раз
$('.bth-restart-test-js').on('click', function() {
    restartTest();
});
// функция перезагрузки (обнуления) теста
function restartTest() {
    counterQuestions = 0;
    colCorrectAnswer = 0;
    $('.btn-answers-js').on('click', function () {
        chosenAnswer($(this));
    });
    $('.btn-answers-js').removeClass('active').removeClass('display-none').removeClass('btn-answers--blue').removeClass('btn-answers--red');
    $('.list-questions-js').removeClass('display-none');
    $('.end-page-test-js').addClass('display-none');
    $('.questions-js').eq(0).removeClass('display-none');
    $('.answers-js').removeClass('display-none');
    $('.response-information-true-js').addClass('display-none');
    $('.response-information-false-js').addClass('display-none');
    $('.btn-next-question-js').addClass('display-none');
    if ( $('.wrap-img-js').hasClass('blur') ) {
        $('.img-questions-js').addClass('blur');
    }
    // $('.blur.img-questions-js').addClass('blur');
};

if ($('.test-questions-blurred').length) {
    var ua = navigator.userAgent;
    var msie = ua.indexOf("Trident");
    if (msie > 0) {         // If Internet Explorer, return version number
        $('#theme2018').addClass('ie');
    }
}
if ($(window).width() <= 560) {
    slickSliderActive = false;
}
// слайдеры на странице under30
var slickSliderActive;
launchSlickSlider = function() {
        $('.slider-nominations-js').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            prevArrow: '<div class="slick-prev" title="Назад"></div>',
            nextArrow: '<div class="slick-next" title="Вперед"></div>',
            autoplay: false,
            asNavFor: '.slider-members-js',
            responsive: [{
                breakpoint: 561,
                settings: 'unslick'
            }]
        });
        $('.slider-members-js').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: false,
            arrows: false,
            fade: true,
            autoplay: false,
            asNavFor: '.slider-nominations-js',
            responsive: [{
                breakpoint: 561,
                settings: 'unslick'
            }]
        });
};
launchSlickSlider();

$('.slider-nominations-js').on('destroy', function(event, slick) {
    slickSliderActive = false;
});

$(window).resize(function(){
    if( (slickSliderActive === false) && ( $(window).width()>=561) ) {
        launchSlickSlider();
        slickSliderActive = true;
    }
});

// рейтинг under30
var openColSpeakersWeb = 5,
    openColSpeakersIpad = 4,
    openColSpeakersMobPlus = 3,
    openColSpeakersMob = 2,
    speakers = 0,
    sumSpeakers = 5,
    counterSpeakers = 0,
    firstClick = false;
    colSpeakers = $('.member-under30-js').length,
    showSpeakers = $('.member-under30-js:visible').length;

// ресайз окна браузера
$(window).resize(function(){
    howManyMembersOpen();
});

// сколько участников показывать при клике
howManyMembersOpen = function () {
    if ($(window).width()>=651) {
        speakers = openColSpeakersWeb;
        sumSpeakers = speakers;
    } else if (($(window).width()<=650) & ($(window).width()>=561)) {
        speakers = openColSpeakersIpad;
        sumSpeakers = speakers;
    } else if (($(window).width()<=560) & ($(window).width()>=501)) {
        speakers = openColSpeakersMobPlus;
        sumSpeakers = speakers;
    } else {
        speakers = openColSpeakersMob;
        sumSpeakers = speakers;
    }
};
howManyMembersOpen();

// функция показа участников under30
showMembers = function(sumSpeakers) {
    if (!(firstClick)) {
        showMembersFirst(sumSpeakers);
    } else {
        showMembersSecond(sumSpeakers);
    }
};
// функция показа при первом клике
showMembersFirst = function() {
    firstClick = true;
    $('.btn-hide-all-participants-under30-js').show();
    counterSpeakers = showSpeakers + speakers;
    $('.member-under30-js').slice(0, [sumSpeakers]).show();
};
// функция показа при последующих кликах
showMembersSecond = function() {
    counterSpeakers += speakers;
    $('.member-under30-js').slice(0, [sumSpeakers]).show();
    if (counterSpeakers >= colSpeakers ) {
        $('.btn-show-more-participants-under30-js').hide();
    }
};
// клик по кнопке показать больше участников under30
$('.btn-show-more-participants-under30-js').on('click', function () {
    sumSpeakers += speakers;
    showMembers(sumSpeakers);
});
// клик по кнопке скрыть всех участников under30 к исходному состоянию
$('.btn-hide-all-participants-under30-js').on('click', function () {
    $(this).hide();
    $('.btn-show-more-participants-under30-js').show();
    firstClick = false;
    $('.member-under30-js').hide().slice(0, [speakers]).show();;
    sumSpeakers = speakers;
});

var ForbesRating = /** @class */ (function () {
    function ForbesRating(rating) {
        this.rating = rating;
        this.tables = $(this.rating).find('table');
        this.show(3);
        var _self = this;
        $(this.rating).find('select').on('change', function () {
            var v = $(this).val();
            _self.show(+v);
        });
    }
    ForbesRating.prototype.show = function (index) {
        var $t = this.tables.eq(index);
        $(this.rating).find('button').removeClass('active');
        $(this.rating).find('button').eq(index).addClass('active');
        $.each(this.tables, function (i) {
            $(this).removeClass('show');
        });
        $t.addClass('show');
    };
    return ForbesRating;
}());

var BannerItem = /** @class */ (function () {
    function BannerItem(elem) {
        this.elem = elem;
        this.elem.addClass('forbes-banner').prepend('<div class="forbes-banner-close">Закрыть</div>');
        this.stick();
        var b = this;
        this.elem.find('.forbes-banner-close').on('click', function () { b.hide(); });
    }
    BannerItem.prototype.stick = function () {
        this.elem.addClass('forbes-banner-fixed');
        var b = this;
        setTimeout(function () {
            b.hide();
        }, this.elem.data('banner-lock') * 1000);
    };
    BannerItem.prototype.hide = function () {
        this.elem.removeClass('forbes-banner-fixed');
    };
    return BannerItem;
}());
var BannersManager = /** @class */ (function () {
    function BannersManager() {
        var banners = $("[data-banner-lock]");
        var manager = this;
        manager.banners = Array();
        // this.banners.addClass('forbes-banner forbes-banner-fixed');
        $.each(banners, function (elem) {
            var b = new BannerItem(banners.eq(elem));
            manager.banners.push(b);
        });
    }
    return BannersManager;
}());
window['forbes'] = window['forbes'] || {};
jQuery(function () {
    window['forbes'].BannersManager = new BannersManager();
});
//# sourceMappingURL=script.js.map

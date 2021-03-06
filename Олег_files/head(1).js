var isMobile =  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
var dWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
function isAdsMobile() {
    if (isMobile == true && dWidth <= 736) {//* iPhone 4-5-6+
        return true;
    } else if (isMobile == true && dWidth > 736) {// iPad
        return false;
    } else {// desktop
        return false;
    }
}
var mob = isAdsMobile();
var tablet = !!((isMobile == true && dWidth > 736));
var device = function(){
  if (mob) {
    return 'mobile';
  } else if (tablet) {
    return 'tablet';
  } else {
    return 'pc';
  }
};
device = device();
console.log('is mob =', mob, '\nis tablet =', tablet, '\nis device =', device);


// Title and Alt под картинкой в статье
function titleFieldImg(){
  (function ($) {
    if ($('.col-center-in .media-element').length != 0){
      $('.media-element').each(function(indx, element){
        if ($(element).attr('data-field-img') == undefined){
          var title = ($(element).attr('title') != undefined) ? $(element).attr('title') : '';
          var alt = ($(element).attr('alt') != undefined) ? $(element).attr('alt') : '';
          var styleWidth = '';
          var styleMarginAndFloat = '';
          if ( $(element).attr('style') != undefined) {
            styleWidth = 'max-width: ' + $(element).width() + 'px;';
            if ($(element).css('float')!='none') {
              ($(element).css('float') == 'right') ? styleMarginAndFloat = ' right' : styleMarginAndFloat = ' left';
            }
          }
          (alt != '') ? alt = '<span class="item-author">' + alt + '</span>' : alt = '';
          (title != '') ? title = '<span class="item-source">' + title + '</span>' : title = '';
          $(element).wrap('<div class="field-img alt-or-title' + styleMarginAndFloat + '" style="' + styleWidth + '"></div>').after(alt + title);
          $(element).css({
            'margin': '',
            'float' : ''
          }).attr('data-field-img','true');
        }
      });
    }
  })(jQuery);
}


// LentaInform - Размещение дополнительного счетчика
function lentaInformPixel() {
  if (window.self === window.top) {
    (document.createElement('IMG')).src = document.location.protocol
      + '//autocounter.lentainform.com/1x1.gif?pid=' + 44808 +
      '&referer=' + location.href.replace(/&/g, '%26');
  }
}
document.addEventListener("DOMContentLoaded", function(){
  if (document.body.classList.contains('page-node')){
    lentaInformPixel();
  }
});

// отрисовка пикселя статистики
function renderInStatPixel(nid) {
  var args = new Array();
  var mob = isAdsMobile();
  args[args.length] = 'nid=' + nid;
  if (encodeURIComponent(document.referrer) !== '') {
    args[args.length] = 'referer=' + encodeURIComponent(document.referrer)
  }
  if (document.location.search !== '') {
    args[args.length] = 'query=' + encodeURIComponent(document.location.search)
  }
  args[args.length] = 'is_mobile='+(((typeof mob != 'undefinded') && mob)?'1':'0');

  var img_tag = document.createElement("img");
  img_tag.setAttribute('src', 'https://stats.tech.forbes.ru/forbes/img.gif?' + args.join('&'));
  img_tag.setAttribute('width', '1');
  img_tag.setAttribute('height', '1');

  var script_tag = document.getElementById('in_stats_' + nid);
  if(script_tag) {
    var parentDiv = script_tag.parentNode;
    parentDiv.insertBefore(img_tag, script_tag);
  }
}


// сокращение в коде console.log();
// пример - cl('test');
//function cl(){
//  console.log.apply(console, arguments);
//}

(function ( $ ) {
  $.fn.awesome_emojify = function( options ) {
    var settings = $.extend({
        emoticons: {
          ':-)'     : 'emoji-1.png',
          ';-)'     : 'emoji-2.png',
          ':-D'     : 'emoji-3.png',
          ':-d'     : 'emoji-3.png',
          ':-o'     : 'emoji-4.png',
          ':-O'     : 'emoji-4.png',
          '<3'      : 'emoji-5.png',
          ':-('     : 'emoji-6.png',
          ':-p'     : 'emoji-7.png',
          ':-P'     : 'emoji-7.png',
          ':-|'     : 'emoji-8.png',
          ':-/'     : 'emoji-8.png',
          ':)'      : 'emoji-1.png',
          ';)'      : 'emoji-2.png',
          ':D'      : 'emoji-3.png',
          ':d'      : 'emoji-3.png',
          ':o'      : 'emoji-4.png',
          ':O'      : 'emoji-4.png',
          ':('      : 'emoji-6.png',
          ':p'      : 'emoji-7.png',
          ':P'      : 'emoji-7.png',
          ':/'      : 'emoji-8.png',
          ':|'      : 'emoji-8.png'
        },
        width: '24px',
        height: '24px',
        images_path: 'dist/images/',
        text: $(this).text()
    }, options );

    url = settings.images_path;
    var patterns = [],
       metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

    for (var i in settings.emoticons) {
      if (settings.emoticons.hasOwnProperty(i)){
        patterns.push('('+i.replace(metachars, "\\$&")+')');
      }
    }
    return settings.text.replace(new RegExp(patterns.join('|'),'g'), function (match) {
      return typeof settings.emoticons[match] !== 'undefined' ?
      '<img src="'+url+settings.emoticons[match]+'" style="width: '+ settings.width +'; height: '+ settings.height +';"/>' :
      match;
    });
  };
}( jQuery ));

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-5127499-1']);
_gaq.push(['_setDomainName', 'in2teck.com']);
_gaq.push(['_trackPageview']);

var delay = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

function redirectPage(page){
  window.location = page;
}

function redirectFade(page){
  $("body").fadeOut(400, function(){
    redirectPage(page);        
  });
}

function loadGoogleAnalytics(){
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
}

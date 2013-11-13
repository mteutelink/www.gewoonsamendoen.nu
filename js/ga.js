/**
 * GewoonSamenDoen.NU - Google Analytics Javascript
 * Copyright 2013 Marc Teutelink                                                      
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-45672489-1']);
_gaq.push(['_setDomainName', 'gewoonsamendoen.nu']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

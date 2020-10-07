$('#example1').coreSlider({
  pauseOnHover: false,
  interval: 3000,
  controlNavEnabled: true
});
$('#example2').coreSlider({
  clone: true,
  cloneItems: 6
});

  (function() {
    let ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    let s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


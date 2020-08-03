Modernizr.addTest('flash', function(){
  var hasFlash = (
        (typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") ||
        (window.ActiveXObject && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false)
      );
  return (hasFlash === false || hasFlash === undefined) ? false : true;
});
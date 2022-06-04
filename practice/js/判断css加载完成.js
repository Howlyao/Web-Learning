function loadcss(src, fn) {
  var node = document.createElement("link");

  node.rel = "stylesheet";

  node.href = src;

  document.head.insertBefore(node, document.head.firstChild);

  if (node.attachEvent) {
    //IE

    node.attachEvent("onload", function() {
      fn(null, node);
    });
  } else {
    //other browser

    setTimeout(function() {
      poll(node, fn);
    }, 0);
  }

  function poll(node, callback) {
    var isLoaded = false;

    if (/webkit/i.test(navigator.userAgent)) {
      //webkit

      if (node["sheet"]) {
        isLoaded = true;
      }
    } else if (node["sheet"]) {
      // for Firefox

      try {
        if (node["sheet"].cssRules) {
          isLoaded = true;
        }
      } catch (ex) {
        // NS_ERROR_DOM_SECURITY_ERR

        if (ex.code === 1000) {
          isLoaded = true;
        }
      }
    }

    if (isLoaded) {
      setTimeout(function() {
        callback(null, node);
      }, 1);
    } else {
      setTimeout(function() {
        poll(node, callback);
      }, 10);
    }
  }

  node.onLoad = function() {
    fn(null, node);
  };
}

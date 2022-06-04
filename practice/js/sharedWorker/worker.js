let ports = [];
onconnect = function(e) {
  var port = e.ports[0];
  ports.push(port);

  port.addEventListener("message", function(e) {
    var workerResult = e.data;
    ports.map(item => {
      if (item !== port) {
        item.postMessage(workerResult);
      }
    });
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};

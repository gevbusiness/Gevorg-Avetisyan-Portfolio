;(function(){
  var map = {
  "commitId": "ace376a6885b29bd7f8897552fb2ef85cefe4680",
  "branchName": "release",
  "buildTime": "Thu, 10 Nov 2022 10:23:41 GMT",
  "buildVersion": "5.1.142",
  "css": [
    "@zoom/client-scheduler/static/css/chunk-vendors.7f57ae19.css",
    "@zoom/client-scheduler/static/css/index.e12145da.css"
  ],
  "js": [
    "@zoom/client-scheduler/static/js/chunk-vendors.571fe05b.js",
    "@zoom/client-scheduler/static/js/index.2fa857ad.js"
  ]
};
  var prefix = 'https://dev-integration.zoomdev.us/fe-static/';
  map.css && map.css.forEach(function (cssItem) {
    var linkTag = document.createElement('link');
    var cssURL = prefix +  cssItem ;
    linkTag.href = cssURL;
    linkTag.setAttribute('rel','stylesheet');
    document.head.appendChild(linkTag);
  });
  map.js && map.js.forEach(function (jsItem) {
    var scriptTag = document.createElement("script");
    var jsURL = prefix +  jsItem;
    scriptTag.setAttribute("src", jsURL);
    document.body.appendChild(scriptTag);
  });
  window.domainFromServer= "https://dev-integration.zoomdev.us/fe-static/";
})();

;(function(){
  var map = {
  "commitId": "1d3ef12223f8d917883902de2042b84057b46b92",
  "branchName": "release",
  "buildTime": "Thu, 10 Nov 2022 09:44:03 GMT",
  "buildVersion": "5.1.222",
  "css": [
    "@zoom/client-calendar/static/css/vendors~app.3c01bcc5.css",
    "@zoom/client-calendar/static/css/app.4c7f0c5e.css"
  ],
  "js": [
    "@zoom/client-calendar/static/js/vendors~app.4f168a16.js",
    "@zoom/client-calendar/static/js/zoomUI~app.795383fb.js",
    "@zoom/client-calendar/static/js/app.172f66f6.js"
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

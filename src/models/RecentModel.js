/**
 * RecentModel.js
 */
(function (spiderOakApp, window, undefined) {
  "use strict";
  var console = window.console || {};
  console.log = console.log || function(){};
  var Backbone    = window.Backbone,
      _           = window._,
      $           = window.$;

  spiderOakApp.RecentModel = Backbone.Model.extend({
    defaults: {
      // ...
    }
  });

})(window.spiderOakApp = window.spiderOakApp || {}, window);

System.register(['./service_url_map', './helper'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var service_url_map_1, helper_1;
    return {
        setters:[
            function (service_url_map_1_1) {
                service_url_map_1 = service_url_map_1_1;
            },
            function (helper_1_1) {
                helper_1 = helper_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('eightsApp.helper', ['ionic'])
                .service("helper", helper_1.Helper)
                .service("serviceUrlMap", service_url_map_1.ServiceUrlMap));
        }
    }
});
//# sourceMappingURL=service_module.js.map
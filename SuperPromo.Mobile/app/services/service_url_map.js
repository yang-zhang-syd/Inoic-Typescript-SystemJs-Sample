System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ServiceUrlMap;
    return {
        setters:[],
        execute: function() {
            ServiceUrlMap = (function () {
                function ServiceUrlMap() {
                    this.map = {};
                }
                ServiceUrlMap.prototype.getRequestUrl = function (requestName) {
                    return this.map[requestName];
                };
                ServiceUrlMap.prototype.registerServiceUrl = function (serviceName, url) {
                    this.map[serviceName] = url;
                };
                return ServiceUrlMap;
            }());
            exports_1("ServiceUrlMap", ServiceUrlMap);
        }
    }
});
//# sourceMappingURL=service_url_map.js.map
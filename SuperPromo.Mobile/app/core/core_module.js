System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            exports_1("default",angular.module('eightsApp.core', [
                // officially supported libraries
                'ionic',
                'ngCordova',
                // 3rd party libraries
                'ionic-modal-select',
                'LocalForageModule',
                'jett.ionic.filter.bar',
                'onezone-datepicker'
            ]));
        }
    }
});
//# sourceMappingURL=core_module.js.map
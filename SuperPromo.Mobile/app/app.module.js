System.register(['./core/core_module', './menu/menu_module', './account/account_module', './exception/exception_handler'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_module_1, menu_module_1, account_module_1, exception_handler_1;
    var module, bodyElem;
    return {
        setters:[
            function (core_module_1_1) {
                core_module_1 = core_module_1_1;
            },
            function (menu_module_1_1) {
                menu_module_1 = menu_module_1_1;
            },
            function (account_module_1_1) {
                account_module_1 = account_module_1_1;
            },
            function (exception_handler_1_1) {
                exception_handler_1 = exception_handler_1_1;
            }],
        execute: function() {
            module = angular.module('eightsApp', [
                core_module_1.default.name,
                account_module_1.default.name,
                menu_module_1.default.name,
                exception_handler_1.default.name
            ]);
            // Register constants.
            //module.constant("IdServerUrl", "http://localhost:2523");
            //module.constant("ApiBaseUrl", "http://localhost:34007");
            module.constant("IdServerUrl", "https://zyids.azurewebsites.net");
            module.constant("ApiBaseUrl", "https://superpromoapi.azurewebsites.net");
            module.constant("EmailServiceUrl", "https://superpromoemailservice.azurewebsites.net");
            module.config(function ($stateProvider, $urlRouterProvider, $localForageProvider) {
                // If none of the above states are matched, use this as the fall back.
                $urlRouterProvider.otherwise('/app/login');
            });
            // Manual bootstrap angular app.
            bodyElem = angular.element(document.querySelector('body'));
            angular.bootstrap(bodyElem, ['eightsApp']);
        }
    }
});
//# sourceMappingURL=app.module.js.map
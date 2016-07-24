System.register(['./login_controller', './register_controller', '../services/service_module'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var login_controller_1, register_controller_1, service_module_1;
    return {
        setters:[
            function (login_controller_1_1) {
                login_controller_1 = login_controller_1_1;
            },
            function (register_controller_1_1) {
                register_controller_1 = register_controller_1_1;
            },
            function (service_module_1_1) {
                service_module_1 = service_module_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('eightsApp.account', ['ionic', service_module_1.default.name])
                .controller("LoginController", login_controller_1.default)
                .controller("RegisterController", register_controller_1.default)
                .config(function ($stateProvider) {
                $stateProvider.state('app.login', {
                    url: "/login",
                    views: {
                        'menuContent': {
                            templateUrl: "app/account/login.html",
                            controller: "LoginController",
                            controllerAs: "vm"
                        }
                    }
                });
                $stateProvider.state('app.register', {
                    url: "/register",
                    views: {
                        'menuContent': {
                            templateUrl: "app/account/register.html",
                            controller: "RegisterController",
                            controllerAs: "vm"
                        }
                    }
                });
            }));
        }
    }
});
//# sourceMappingURL=account_module.js.map
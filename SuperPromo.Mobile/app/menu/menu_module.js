System.register(['./menu_controller'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var menu_controller_1;
    return {
        setters:[
            function (menu_controller_1_1) {
                menu_controller_1 = menu_controller_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('eightsApp.menu', ['ionic'])
                .controller("MenuController", menu_controller_1.default)
                .config(function ($stateProvider) {
                $stateProvider.state('app', {
                    url: "/app",
                    'abstract': true,
                    templateUrl: "app/menu/menu.html",
                    controller: "MenuController"
                });
            }));
        }
    }
});
//# sourceMappingURL=menu_module.js.map
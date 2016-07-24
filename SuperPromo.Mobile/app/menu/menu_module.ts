import MenuController from './menu_controller';

export default angular.module('eightsApp.menu', ['ionic'])

    .controller("MenuController", MenuController)

    .config(($stateProvider: ng.ui.IStateProvider) => {
        $stateProvider.state('app', {
            url: "/app",
            'abstract': true,
            templateUrl: "app/menu/menu.html",
            controller: "MenuController"
        });
    });
import LoginController from './login_controller';
import RegisterController from './register_controller';
import helper from '../services/service_module';

export default angular.module('eightsApp.account', ['ionic', helper.name])

    .controller("LoginController", LoginController)
    .controller("RegisterController", RegisterController)

    .config(($stateProvider: ng.ui.IStateProvider) => {

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

    });
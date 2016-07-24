System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RegisterController;
    return {
        setters:[],
        execute: function() {
            RegisterController = (function () {
                function RegisterController(scope, ionicLoading, helper) {
                    this.scope = scope;
                    this.ionicLoading = ionicLoading;
                    this.helper = helper;
                    this.Email = "";
                    this.Password = "";
                    this.RepeatPassword = "";
                    var vm = this;
                    vm.register = this.register;
                }
                RegisterController.prototype.register = function () {
                    var _this = this;
                    this.ionicLoading.show({
                        template: 'Sending Request...'
                    });
                    var data = {
                        username: this.Email,
                        email: this.Email,
                        password: this.Password,
                        repeatPassword: this.RepeatPassword
                    };
                    this.helper.sendRequest('Register', 'POST', data).finally(function () {
                        _this.ionicLoading.hide();
                    });
                };
                return RegisterController;
            }());
            RegisterController.$inject = ['$scope', '$ionicLoading', 'helper'];
            exports_1("default",RegisterController);
        }
    }
});
//# sourceMappingURL=register_controller.js.map
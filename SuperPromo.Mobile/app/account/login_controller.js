System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LoginController;
    return {
        setters:[],
        execute: function() {
            LoginController = (function () {
                function LoginController(scope, ionicLoading, http, idServerUrl, ionicPopup, localForage) {
                    this.scope = scope;
                    this.ionicLoading = ionicLoading;
                    this.http = http;
                    this.idServerUrl = idServerUrl;
                    this.ionicPopup = ionicPopup;
                    this.localForage = localForage;
                    this.Email = "";
                    this.Password = "";
                    this.Persist = true;
                    var vm = this;
                    vm.login = this.login;
                }
                LoginController.prototype.login = function () {
                    var _this = this;
                    this.ionicLoading.show({
                        template: 'Logging in...'
                    });
                    var data = {
                        username: this.Email,
                        password: this.Password,
                        grant_type: "password",
                        scope: "profile openid superpromo roles yzhang_email_service"
                    };
                    var body = "";
                    for (var key in data) {
                        if (body.length) {
                            body += "&";
                        }
                        body += key + "=";
                        body += encodeURIComponent(data[key]);
                    }
                    var reqHeaders = {};
                    reqHeaders['Authorization'] = 'Basic ' + btoa('superpromo:69B5F798-BE55-78BC-8AA8-0035B903DC9B');
                    reqHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
                    var config = {
                        method: 'POST',
                        url: this.idServerUrl + '/identity/connect/token',
                        data: body,
                        headers: reqHeaders
                    };
                    this.http(config)
                        .error(function () {
                        _this.ionicPopup.alert({
                            title: '错误',
                            template: '登陆失败!'
                        });
                        _this.ionicLoading.hide();
                    })
                        .then(function (response) {
                        if (response.status == 200) {
                            _this.ionicLoading.hide();
                            response.data.email = _this.Email;
                            _this.scope.$emit('Login', response.data);
                        }
                    });
                    if (!this.Persist) {
                        this.localForage.clear();
                    }
                };
                return LoginController;
            }());
            LoginController.$inject = ['$scope', '$ionicLoading', '$http', 'IdServerUrl', '$ionicPopup', '$localForage'];
            exports_1("default",LoginController);
        }
    }
});
//# sourceMappingURL=login_controller.js.map
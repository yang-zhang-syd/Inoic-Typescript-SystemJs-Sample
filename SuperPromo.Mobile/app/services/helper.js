System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Helper;
    return {
        setters:[],
        execute: function() {
            Helper = (function () {
                function Helper(rootScope, http, serviceUrlMap, ionicLoading, ionicPopup) {
                    this.rootScope = rootScope;
                    this.http = http;
                    this.serviceUrlMap = serviceUrlMap;
                    this.ionicLoading = ionicLoading;
                    this.ionicPopup = ionicPopup;
                }
                Helper.prototype.sendRequest = function (requestName, method, data, contentType) {
                    var _this = this;
                    var reqHeaders = {};
                    if (contentType) {
                        reqHeaders['Content-Type'] = contentType;
                    }
                    if (this.tokenResponse && requestName != "UpdatePassword") {
                        reqHeaders['Authorization'] = 'Bearer ' + this.tokenResponse.access_token;
                    }
                    var url = this.serviceUrlMap.getRequestUrl(requestName);
                    if ((method == 'GET' || method == 'DELETE') && data) {
                        url += data;
                    }
                    var config = {
                        method: method,
                        url: url,
                        headers: reqHeaders,
                        timeout: 20000
                    };
                    if (method != 'GET') {
                        config.data = data;
                    }
                    var promise = this.http(config);
                    // common error handler to set offline mode to true
                    promise.error(function (data) {
                        _this.ionicLoading.hide();
                        _this.ionicPopup.alert({
                            title: '错误',
                            template: data ? data.Message : '发送请求失败!'
                        });
                    });
                    // broadcast request response received event
                    promise.then(function (response) {
                        if (response.status == 200) {
                            _this.rootScope.$broadcast(requestName, response.data);
                        }
                    });
                    return promise;
                };
                Helper.$inject = ['$rootScope', '$http', 'serviceUrlMap', '$ionicLoading', '$ionicPopup'];
                return Helper;
            }());
            exports_1("Helper", Helper);
        }
    }
});
//# sourceMappingURL=helper.js.map
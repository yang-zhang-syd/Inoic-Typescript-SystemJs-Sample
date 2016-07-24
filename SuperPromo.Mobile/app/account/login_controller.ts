
class LoginController {

    private Email = "";
    private Password = "";
    private Persist = true;

    constructor (
        private scope: ng.IScope,
        private ionicLoading: any,
        private http: ng.IHttpService,
        private idServerUrl: string,
        private ionicPopup: any,
        private localForage: any) {

        var vm = this;
        vm.login = this.login;
    }

    private login() {

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

        var reqHeaders: any = {};
        reqHeaders['Authorization'] = 'Basic ' + btoa('superpromo:69B5F798-BE55-78BC-8AA8-0035B903DC9B');
        reqHeaders['Content-Type'] = 'application/x-www-form-urlencoded';

        var config: ng.IRequestConfig = {
            method: 'POST',
            url: this.idServerUrl + '/identity/connect/token',
            data: body,
            headers: reqHeaders
        };

        this.http(config)
            .error(() => {

                this.ionicPopup.alert({
                    title: '错误',
                    template: '登陆失败!'
                });

                this.ionicLoading.hide();
            })
            .then((response: ng.IHttpPromiseCallbackArg<any>) => {
                if (response.status == 200) {
                    this.ionicLoading.hide();
                    response.data.email = this.Email;
                    this.scope.$emit('Login', response.data);
                }
            });

        if (!this.Persist) {
            this.localForage.clear();
        }
    }
}

LoginController.$inject = ['$scope', '$ionicLoading', '$http', 'IdServerUrl', '$ionicPopup', '$localForage'];
export default LoginController;
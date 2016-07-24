class RegisterController {

    private Email = "";
    private Password = "";
    private RepeatPassword = "";

    constructor(
        private scope: ng.IScope,
        private ionicLoading: any,
        private helper: any
    ) {
        var vm = this;
        vm.register = this.register;
    }

    private register() {
        this.ionicLoading.show({
            template: 'Sending Request...'
        });

        var data = {
            username: this.Email,
            email: this.Email,
            password: this.Password,
            repeatPassword: this.RepeatPassword
        };

        this.helper.sendRequest('Register', 'POST', data).finally(() => {
            this.ionicLoading.hide();
        });
    }
}

RegisterController.$inject = ['$scope', '$ionicLoading', 'helper'];
export default RegisterController;
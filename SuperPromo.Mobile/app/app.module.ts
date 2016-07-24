import eightsCore from './core/core_module';
import eightsMenu from './menu/menu_module';
import eightsAccount from './account/account_module';
import eightsException from './exception/exception_handler';

var module = angular.module('eightsApp', [
    
    eightsCore.name,

    eightsAccount.name,
    eightsMenu.name,
    eightsException.name
]);

// Register constants.
//module.constant("IdServerUrl", "http://localhost:2523");
//module.constant("ApiBaseUrl", "http://localhost:34007");
module.constant("IdServerUrl", "https://zyids.azurewebsites.net");
module.constant("ApiBaseUrl", "https://superpromoapi.azurewebsites.net");
module.constant("EmailServiceUrl", "https://superpromoemailservice.azurewebsites.net");

module.config(($stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $localForageProvider: any) => {
    
    // If none of the above states are matched, use this as the fall back.
    $urlRouterProvider.otherwise('/app/login');
});

// Manual bootstrap angular app.
var bodyElem = angular.element(document.querySelector('body'));
angular.bootstrap(bodyElem, ['eightsApp']);
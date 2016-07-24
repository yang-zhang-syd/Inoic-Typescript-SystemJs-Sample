
export default angular.module('eightsApp.exception', [])
    .config(($provide: ng.auto.IProvideService) => {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);
    });

function extendExceptionHandler($delegate: ng.IExceptionHandlerService) {
    
    return function (exception: Error, cause: string) {
        $delegate(exception, cause);
        alert('e...');
    };
}
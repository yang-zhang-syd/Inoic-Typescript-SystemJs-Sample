System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function extendExceptionHandler($delegate) {
        return function (exception, cause) {
            $delegate(exception, cause);
            alert('e...');
        };
    }
    return {
        setters:[],
        execute: function() {
            exports_1("default",angular.module('eightsApp.exception', [])
                .config(function ($provide) {
                $provide.decorator('$exceptionHandler', extendExceptionHandler);
            }));
        }
    }
});
//# sourceMappingURL=exception_handler.js.map
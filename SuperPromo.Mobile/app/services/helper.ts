import { IServiceUrlMap } from './service_url_map';

export interface IHelper {
     sendRequest(requestName: string, method: string, data?: any, contentType?: string): ng.IHttpPromise<any>;
}

export class Helper implements IHelper {

    public static $inject = ['$rootScope', '$http', 'serviceUrlMap', '$ionicLoading', '$ionicPopup'];

    public tokenResponse: any;

    constructor(
        private rootScope: ng.IRootScopeService,
        private http: ng.IHttpService,
        private serviceUrlMap: IServiceUrlMap,
        private ionicLoading: any,
        private ionicPopup: any
    ) {
    }

    public sendRequest(
        requestName: string,
        method: string,
        data?: any,
        contentType?: string
    ): ng.IHttpPromise<any> {

        var reqHeaders: any = {};

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

        var config: ng.IRequestConfig = {
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
        promise.error((data: any) => {
            this.ionicLoading.hide();
            this.ionicPopup.alert({
                title: '错误',
                template: data ? data.Message : '发送请求失败!'
            });
        });

        // broadcast request response received event
        promise.then((response: ng.IHttpPromiseCallbackArg<any>) => {
            if (response.status == 200) {
                this.rootScope.$broadcast(requestName, response.data);
            }
        });

        return promise;
    }
}
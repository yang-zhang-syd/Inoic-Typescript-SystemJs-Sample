
export interface IServiceUrlMap {
    getRequestUrl(requestName: string): string;
    registerServiceUrl(serviceName: string, url: string): void;
}

export class ServiceUrlMap implements IServiceUrlMap {

    private map = {};

    constructor () {
    }

    public getRequestUrl(requestName: string) {
        return this.map[requestName];
    }

    public registerServiceUrl(serviceName: string, url: string) {
        this.map[serviceName] = url;
    }
}


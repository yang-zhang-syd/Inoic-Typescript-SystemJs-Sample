import { ServiceUrlMap } from './service_url_map';
import { Helper } from './helper';

export default angular.module('eightsApp.helper', ['ionic'])
    .service("helper", Helper)
    .service("serviceUrlMap", ServiceUrlMap);
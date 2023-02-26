import {Route} from '@angular/router';
import {CustomRouteData} from './custom-route-data';

export interface CustomRoute extends Route {
    data: CustomRouteData;
    children?: CustomRoute[];
}

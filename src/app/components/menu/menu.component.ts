import {Component, Input, OnChanges} from '@angular/core';
import {MenuSimpleChanges} from './models/internal/menu-simple-changes';
import {CustomRoute} from '../../helpers/types/custom-route';
import {Router} from '@angular/router';

@Component({
    selector: 'tasks-menu',
    templateUrl: './menu.component.html',
    styleUrls: [
        '../base.css',
        './menu.component.css',
    ],
})
export class MenuComponent implements OnChanges {
    @Input() public routes: CustomRoute[];
    @Input() public basePath: string;

    public constructor(router: Router) {
        this.basePath = '';
        this.routes = router.config.filter((route) => route.data?.['menuEntry'] != null)
            .map((route) => route as CustomRoute);
    }

    public ngOnChanges(changes: MenuSimpleChanges): void {
        this.routes = changes.routes.currentValue;
    }
}

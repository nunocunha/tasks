import {Component, Input, OnChanges} from '@angular/core';
import {Routes} from '@angular/router';
import {MenuSimpleChanges} from './models/internal/menu-simple-changes';

@Component({
    selector: 'tasks-menu',
    templateUrl: './menu.component.html',
    styleUrls: [
        '../base.css',
        './menu.component.css',
    ],
})
export class MenuComponent implements OnChanges {
    @Input() public routes: Routes = [];

    public ngOnChanges(changes: MenuSimpleChanges): void {
        this.routes = changes.routes?.currentValue.filter((route) => route.data?.['name'] != null) ?? this.routes;
    }
}

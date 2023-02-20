import {SimpleChanges} from '@angular/core';
import {MenuComponent} from '../../menu.component';
import {MenuSimpleChange} from './menu-simple-change';

export interface MenuSimpleChanges extends SimpleChanges {
    routes: MenuSimpleChange<MenuComponent['routes']>;
}

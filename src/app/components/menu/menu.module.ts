import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {MatListModule} from '@angular/material/list';
import {RouterLink} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    declarations: [
        MenuComponent,
    ],
    imports: [
        CommonModule,
        MatListModule,
        RouterLink,
        MatIconModule,
    ],
    exports: [
        MenuComponent,
    ],
})
export class MenuModule {
}

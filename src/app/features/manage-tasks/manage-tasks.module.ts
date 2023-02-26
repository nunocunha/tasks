import {NgModule} from '@angular/core';
import {ManageTasksComponent} from './manage-tasks.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {CustomRouteModule} from '../../helpers/types/custom-route-module';
import {BrowserModule} from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {TypeChecker} from '../../helpers/services/type-checker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';

@NgModule({
    declarations: [
        ManageTasksComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild(ManageTasksModule.routes),
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        A11yModule,
    ],
    exports: [
        ManageTasksComponent,
        BrowserModule,
        RouterModule,
    ],
})
export class ManageTasksModule extends CustomRouteModule {
    static {
        this.routes = [
            {
                path: 'manage-tasks',
                component: ManageTasksComponent,
                providers: [TypeChecker],
                data: {
                    menuEntry: {
                        name: 'Manage tasks',
                        icon: 'checklist',
                    },
                },
            },
        ];
    }
}

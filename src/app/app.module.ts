import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {RouterModule, Routes} from '@angular/router';
import {MenuModule} from './components/menu/menu.module';
import {ManageTasksComponent} from './features/manage-tasks/manage-tasks.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(AppModule.rootRoutes),
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    public static readonly mainRoutes: Routes = [
        {
            path: 'manage-tasks',
            component: ManageTasksComponent,
            data: {
                name: 'Manage tasks',
                icon: 'checklist',
            },
        },
    ];

    public static readonly rootRoutes: Routes = [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: [...AppModule.mainRoutes].pop()?.path,
        },
        ...AppModule.mainRoutes,
        {
            path: '**',
            component: class Error {
            },
        },
    ];
}

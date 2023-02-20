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
import {ListComponent} from './features/list/list.component';

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
            path: 'list',
            component: ListComponent,
            data: {
                name: 'List',
                icon: 'checklist',
            },
        },
    ];

    public static readonly rootRoutes: Routes = [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'list',
        },
        ...AppModule.mainRoutes,
        {
            path: '**',
            component: class Error {
            },
        },
    ];
}

import {Component, NgModule} from '@angular/core';
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
import {ManageTasksModule} from './features/manage-tasks/manage-tasks.module';

@Component({
    standalone: true,
    template: '',
})
class EmptyComponent {
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(AppModule.routes),
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MenuModule,
        ManageTasksModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    public static readonly routes: Routes = [
        {
            path: '',
            pathMatch: 'full',
            component: EmptyComponent,
        },
        {
            path: '**',
            component: EmptyComponent,
        },
    ];
}

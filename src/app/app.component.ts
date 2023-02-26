import {Component, HostBinding, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
    selector: 'tasks-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    public mobileQuery: MediaQueryList;
    @HostBinding('class.container') private hasContainerClass = true;
    @HostBinding('class.is-mobile') private hasMobileClass = false;

    public constructor(media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this.mobileQuery.addEventListener('change', () => {
            this.hasMobileClass = this.mobileQuery.matches;
        });
    }

    public ngOnInit(): void {
        this.hasMobileClass = this.mobileQuery.matches;
    }
}

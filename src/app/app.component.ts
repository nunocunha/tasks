import {ChangeDetectorRef, Component, HostBinding} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
    selector: 'tasks-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    public mobileQuery: MediaQueryList;
    @HostBinding('class.container') private hasContainerClass = true;
    @HostBinding('class.is-mobile') private hasMobileClass = false;

    public constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQuery.addEventListener('change', () => {
            this.hasMobileClass = this.mobileQuery.matches;
            changeDetectorRef.detectChanges();
        });
    }
}

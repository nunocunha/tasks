import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
    let app: AppComponent;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    it('Should create the app', () => {
        expect(app).toBeTruthy();
    });
});

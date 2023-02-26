import {Component, Inject, OnDestroy, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {TaskDialog} from './models/task-dialog';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import {filter, Subscription} from 'rxjs';

@Component({
    selector: 'tasks-add-task',
    standalone: true,
    imports: [
        CommonModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        A11yModule,
        ReactiveFormsModule,
    ],
    templateUrl: './task-dialog.component.html',
    styleUrls: ['./task-dialog.component.css'],
})
export class TaskDialogComponent implements OnDestroy {
    public title = new FormControl(this.task?.title, [Validators.required]);
    private subscriptions = new Subscription();

    public constructor(@Optional() @Inject(MAT_DIALOG_DATA) public task?: TaskDialog) {
        this.subscriptions.add(this.title.valueChanges
            .pipe(filter(() => this.title.valid))
            .subscribe({
                next: (title) => {
                    if (title != null) {
                        this.task = {
                            ...this.task,
                            title,
                        };
                    }
                },
            }));
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}

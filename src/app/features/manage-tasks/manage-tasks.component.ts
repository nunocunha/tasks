import {Component} from '@angular/core';
import {Task} from './models/internal/task';
import {TypeChecker} from '../../helpers/services/type-checker';
import {uuid} from '../../helpers/functions/uuid';
import {MatDialog} from '@angular/material/dialog';
import {TaskDialogComponent} from './components/task-dialog/task-dialog.component';
import {TaskDialog} from './components/task-dialog/models/task-dialog';

@Component({
    selector: 'tasks-list',
    templateUrl: './manage-tasks.component.html',
    styleUrls: [
        '../../components/base.css',
        './manage-tasks.component.css',
    ],
})
export class ManageTasksComponent {
    private static readonly LOCAL_STORAGE_KEY = 'tasks';
    public tasks: Task[] = [];

    public constructor(private taskTypeChecker: TypeChecker<Task>, public dialog: MatDialog) {
        this.loadTasksFromLocalStorage();
    }

    public addTaskButton(): void {
        const dialogRef = this.dialog.open(TaskDialogComponent);

        dialogRef.afterClosed().subscribe({
            next: (data: TaskDialog) => {
                if (data != null) {
                    this.addTask(data);
                }
            },
        });
    }

    public addTask(task: TaskDialog): void {
        if (task?.title == null) {
            return;
        }

        const newTask: Task = {
            title: task?.title,
            id: uuid(),
            position: Date.now(),
            done: false,
        };

        this.tasks = [
            ...this.tasks,
            newTask,
        ];

        this.saveTasksToLocalStorage();
    }

    public editTaskButton(task: Task, event: Event): void {
        event.stopPropagation();

        const dialogRef = this.dialog.open(TaskDialogComponent, {
            data: {
                title: task.title,
            },
        });

        dialogRef.afterClosed().subscribe({
            next: (data: TaskDialog) => {
                this.editTask(task.id, data);
            },
        });
    }

    public editTask(id: string, newTask: TaskDialog): void {
        this.tasks = this.tasks.map((task) => task.id === id ? {...task, ...newTask} : task);
        this.saveTasksToLocalStorage();
    }

    public removeTaskButton(task: Task, event: Event): void {
        event.stopPropagation();
        this.removeTask(task.id);
    }

    public removeTask(id: string): void {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasksToLocalStorage();
    }

    public markTask(task: Task, done: boolean): void {
        task.done = done;
        this.saveTasksToLocalStorage();
    }

    private loadTasksFromLocalStorage(): void {
        const parsedLocalStorage = JSON.parse(localStorage.getItem(ManageTasksComponent.LOCAL_STORAGE_KEY) ?? '[]');

        if (this.taskTypeChecker.isOfTypeArray(parsedLocalStorage)) {
            this.tasks = parsedLocalStorage.sort((a, b) => a.position - b.position);
        }
    }

    private saveTasksToLocalStorage(): void {
        localStorage.setItem(ManageTasksComponent.LOCAL_STORAGE_KEY, JSON.stringify(this.tasks));
    }
}

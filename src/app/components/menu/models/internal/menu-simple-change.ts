import {SimpleChange} from '@angular/core';

export type MenuSimpleChange<T> = {
    currentValue: T;
    previousValue: T;
} & Omit<SimpleChange, 'currentValue' | 'previousValue'>;

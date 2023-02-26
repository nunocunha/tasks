import {Injectable} from '@angular/core';

@Injectable()
export class TypeChecker<Type> {
    public isObject(value: unknown): value is Record<string, unknown> {
        return typeof value === 'object' && value != null;
    }

    public isArray(value: unknown): value is Array<unknown> {
        return this.isObject(value) && Array.isArray(value);
    }

    public isOfType(value: unknown): value is Type {
        return this.isObject(value) && typeof value['title'] === 'string';
    }

    public isOfTypeArray(value: unknown): value is Type[] {
        return this.isArray(value) && value.every((inner) => this.isOfType(inner));
    }
}

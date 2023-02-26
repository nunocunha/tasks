import {v4} from 'uuid';

export function uuid(removeDashes = false): string {
    let uuid = v4();

    if (removeDashes) {
        uuid = uuid.replace(/-/g, '');
    }

    return uuid;
}

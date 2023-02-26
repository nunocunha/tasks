import {Task} from '../../../models/internal/task';

export type TaskDialog = Partial<Omit<Task, 'id' | 'position'>>;

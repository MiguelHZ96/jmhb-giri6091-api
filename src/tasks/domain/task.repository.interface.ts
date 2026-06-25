import { Task } from "./task.entity";

//! Dealer (contratador del repositorio)
export interface ITaskRepository {
    create(task: Task): Promise<Task>;
    findAll(): Promise<Task[]>;
    findById(id: number): Promise<Task | null>;
    update(task: Task): Promise<Task>;
    delete(id: number): Promise<boolean>;
}

// Token para la inyección de dependencias
export const ITaskRepositoryToken = Symbol('ITaskRepository');
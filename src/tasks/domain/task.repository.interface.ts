import { Task } from "./task.entify";

//! Dealer (contratador del repositorio)
export interface ITaskRepository {
    create(task: Task): Promise<Task>;
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task | null>;
}

// Token para la inyección de dependencias
export const ITaskRepositoryToken = Symbol('ITaskRepository');
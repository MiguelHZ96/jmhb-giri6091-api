import { Inject, Injectable } from "@nestjs/common";
import type { ITaskRepository } from "../domain/task.repository.interface";
import { ITaskRepository, ITaskRepositoryToken } from "../domain/task.repository.interface";



@Injectable()
export class CreateTaskUseCase {
    constructor(
        @Inject(ITaskRepositoryToken)
        private readonly taskRepository: ITaskRepository,
    ) {}

}

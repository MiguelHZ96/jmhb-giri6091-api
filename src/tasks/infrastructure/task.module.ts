import { Module } from "@nestjs/common";
import { CreateTaskUseCase } from "../application/create-task.use-case";
import { TasksController } from "./controllers/task.controller";
import { ITaskRepositoryToken } from "../domain/task.repository.interface";
import { TaskRepositoryImpl } from "./persistence/task.repository.impl";


@Module({
    controllers: [TasksController ],
    providers:[
        CreateTaskUseCase,
        {
            provide: ITaskRepositoryToken,
            useClass: TaskRepositoryImpl //Cambiar si la DB cambia
        
        }
    ],
    exports: [CreateTaskUseCase]
})
export class Tasksmodule{

}
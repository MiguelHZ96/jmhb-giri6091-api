import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tasksmodule } from './tasks/infrastructure/task.module';

@Module({
  imports: [
    Tasksmodule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

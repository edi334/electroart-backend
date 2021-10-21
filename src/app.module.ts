import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { StudentModule } from "./modules/student/student.module";

@Module({
  imports: [TypeOrmModule.forRoot(), StudentModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

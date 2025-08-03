import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './job/job.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Steephan@2004',
      database: 'job_web',
      autoLoadEntities: true,
      synchronize: true, // Turn off in production
    }),
    JobModule,
  ],
})
export class AppModule {}

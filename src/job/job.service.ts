import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private jobRepository: Repository<Job>,
  ) {}

  findAll(): Promise<Job[]> {
    return this.jobRepository.find();
  }

  findOne(id: number): any {
    return this.jobRepository.findOneBy({ id });
  }

  create(job: Partial<Job>): Promise<Job> {
    return this.jobRepository.save(job);
  }
}

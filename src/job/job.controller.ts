import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { JobService } from './job.service';
import { Job } from './job.entity';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get()
  async getAll(): Promise<Job[]> {
    return this.jobService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Job> {
    const job = await this.jobService.findOne(+id);
    if (!job) throw new NotFoundException('Job not found');
    return job;
  }

  @Post()
  async create(@Body() jobData: Partial<Job>): Promise<Job> {
    return this.jobService.create(jobData);
  }
}

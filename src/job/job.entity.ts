import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column('text')
  description: string;

  @Column()
  location: string;

  @Column()
  type: string; // e.g., Full-Time, Remote

  @Column()
  salary: string;

  @Column()
  postedAt: string; // store as ISO date string (YYYY-MM-DD)
}

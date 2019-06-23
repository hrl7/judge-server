import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Problem } from '../problem/problem.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ nullable: false })
  email: string;

  @Column({ default: 'NONE' })
  name: string;

  @Exclude()
  @Column({ nullable: false })
  passwordHash: string;

  @OneToMany(type => Problem, problem => problem.author)
  problems: Problem[];
}

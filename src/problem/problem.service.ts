import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Problem } from './problem.entity';
import { Repository } from 'typeorm';
import { CreateProblemForm } from './forms/createProblem.form';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private readonly problemRepository: Repository<Problem>,
  ) {

  }

  findAll(): Promise<Problem[]> {
    return this.problemRepository.find({ relations: ['author'] });
  }

  register(problem: Problem) {

  }
}

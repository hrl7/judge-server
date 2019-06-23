import { Controller, Get, UseGuards, Post, Body, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateProblemForm } from './forms/createProblem.form';

@Controller('problems')
@UseGuards(AuthGuard())
@UseInterceptors(ClassSerializerInterceptor)
export class ProblemController {
  constructor(
    private readonly problemService: ProblemService,
  ) {

  }

  @Get()
  findAll() {
    return this.problemService.findAll();
  }

  @Post()
  create(@Body() form: CreateProblemForm) {
    //this.problemService.register({});
  }
}

import { Module } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemController } from './problem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Problem } from './problem.entity';
import { AuthModule } from '../user/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Problem, User]), AuthModule],
  providers: [ProblemService],
  controllers: [ProblemController],
})
export class ProblemModule {
}

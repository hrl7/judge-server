import { IsString } from 'class-validator';

export class CreateProblemForm {
  @IsString()
  readonly name: string;
  @IsString()
  readonly statement: string;
}

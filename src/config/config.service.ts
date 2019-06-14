import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { DotenvParseOutput } from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envConfig: DotenvParseOutput;

  constructor(filePath: string) {
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}

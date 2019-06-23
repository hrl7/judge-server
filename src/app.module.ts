import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './user/auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ProblemModule } from './problem/problem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    UserModule,
    ConfigModule,
    ProblemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}

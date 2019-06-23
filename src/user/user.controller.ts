import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { AuthForm } from './forms/auth.form';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post('sign_up')
  signUp(@Body() form: AuthForm) {
    return this.userService.signUp(form);
  }

  @Post('sign_in')
  signIn(@Body() form: AuthForm) {
    return this.userService.signIn(form);
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll() {
    return this.userService.findAll();
  }

  @Get('me')
  @UseGuards(AuthGuard())
  currentUser(@Req() req: Request) {
    return req.user;
  }
}

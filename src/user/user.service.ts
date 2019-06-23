import { forwardRef, Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from './user.entity';
import { AuthForm } from './forms/auth.form';
import { AuthService } from './auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly authService: AuthService,
  ) {
  }

  signUp(form: AuthForm) {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(form.password, salt);
    const user = new User();
    user.email = form.email;
    user.passwordHash = passwordHash;
    this.userRepository.save(user);
  }

  async signIn(form: AuthForm) {
    const user = await this.findOneByEmail(form.email);
    if (!user || !bcrypt.compareSync(form.password, user.passwordHash)) {
      throw new UnauthorizedException();
    }
    return {
      jwtToken: await this.authService.signIn(user),
      user: {
        email: user.email,
        name: user.name,
      },
    };
  }

  findAll() {
    return this.userRepository.find();
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }
}

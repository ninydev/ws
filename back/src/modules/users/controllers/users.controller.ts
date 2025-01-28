import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entities/user.entity';
import { UserRegisterDto } from '../ dto/user-register.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() userRegisterDto: UserRegisterDto): Promise<User> {
    return this.usersService.register(userRegisterDto);
  }
}

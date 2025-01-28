import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { AbstractService } from 'src/common/abstracts/abstract.service';
import { UserRegisterDto } from '../ dto/user-register.dto';
import { UserRegisteredEvent } from '../events/user-register.event';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class UsersService extends AbstractService<User> {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private eventEmitter: EventEmitter2,
  ) {
    super(usersRepository);
  }

  async register(userRegisterDto: UserRegisterDto): Promise<User> {
    const user = this.usersRepository.create(userRegisterDto);
    const savedUser = await this.usersRepository.save(user);
    this.eventEmitter.emit(
      'user.registered',
      new UserRegisteredEvent(savedUser),
    );
    return savedUser;
  }
}

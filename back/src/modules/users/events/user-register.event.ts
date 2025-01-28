import { User } from '../entities/user.entity';

export class UserRegisteredEvent {
  constructor(public readonly user: User) {}
}

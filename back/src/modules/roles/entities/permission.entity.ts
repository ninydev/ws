import { Column, Entity, ManyToMany } from 'typeorm';
import { Role } from './role.entity';
import { AbstractEntity } from '../../../common/abstracts/abstract.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Permission extends AbstractEntity {
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
  @ManyToMany(() => User, (user) => user.permissions)
  users: User[];
}

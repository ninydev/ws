import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Permission } from './permission.entity';
import { AbstractEntity } from '../../../common/abstracts/abstract.entity';

@Entity()
export class Role extends AbstractEntity {
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];

  @ManyToMany(() => Permission, (permission) => permission.roles)
  permissions: Permission[];
}

import { Column, Entity, ManyToMany } from 'typeorm';
import { Role } from './role.entity';
import { AbstractEntity } from '../../../common/abstracts/abstract.entity';

@Entity()
export class Permission extends AbstractEntity {
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { AbstractService } from 'src/common/abstracts/abstract.service';

@Injectable()
export class RolesService extends AbstractService<Role> {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {
    super(rolesRepository);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { AbstractService } from 'src/common/abstracts/abstract.service';
import { Permission } from '../entities/permission.entity';

@Injectable()
export class PermissionsService extends AbstractService<Permission> {
  constructor(
    @InjectRepository(Role)
    private permissionsRepository: Repository<Permission>,
  ) {
    super(permissionsRepository);
  }
}

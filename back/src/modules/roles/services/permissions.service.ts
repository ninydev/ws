import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { AbstractService } from 'src/common/abstracts/abstract.service';
import { Permission } from '../entities/permission.entity';
import { PaginateConfig } from 'nestjs-paginate';

@Injectable()
export class PermissionsService extends AbstractService<Permission> {
  constructor(
    @InjectRepository(Role)
    private readonly permissionsRepository: Repository<Permission>,
    private readonly permissionsPaginateConfig: PaginateConfig<Permission>,
  ) {
    super(permissionsRepository, permissionsPaginateConfig);
  }
}

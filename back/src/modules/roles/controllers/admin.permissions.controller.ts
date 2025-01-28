import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PermissionsService } from '../services/permissions.service';
import { Permission } from '../entities/permission.entity';
import { AdminGuard } from 'src/guards/admin.guard';
import { PermissionCreateDto } from '../dto/permission-create.dto';
import { Paginate, Paginated, PaginateQuery } from 'nestjs-paginate';

@Controller('permissions')
@UseGuards(AdminGuard)
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  create(@Body() permission: PermissionCreateDto): Promise<Permission> {
    return this.permissionsService.create(<Permission>permission);
  }

  @Get()
  public find(
    @Paginate() query: PaginateQuery,
  ): Promise<Paginated<Permission>> {
    return this.permissionsService.find(query);
  }

  @Get(':id')
  readOne(@Param('id') id: string): Promise<Permission> {
    return this.permissionsService.findOne({ id });
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: PermissionCreateDto,
  ): Promise<Permission> {
    return this.permissionsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.permissionsService.delete(id);
  }
}

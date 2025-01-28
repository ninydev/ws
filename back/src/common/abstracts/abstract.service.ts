import { Injectable } from '@nestjs/common';
import {
  paginate,
  PaginateConfig,
  Paginated,
  PaginateQuery,
} from 'nestjs-paginate';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class AbstractService<Entity extends ObjectLiteral> {
  constructor(
    private readonly repository: Repository<Entity>,
    private readonly paginateConfig: PaginateConfig<Entity>,
  ) {}
  // async block(id: string): Promise<void> {
  //   await this.repository.update(id, { isBlocked: true });
  // }
  //
  // async unblock(id: string): Promise<void> {
  //   await this.repository.update(id, { isBlocked: false });
  // }

  async create(entity: Entity): Promise<Entity> {
    const newEntity = this.repository.create(entity);
    return this.repository.save(newEntity);
  }

  async find(options: PaginateQuery): Promise<Paginated<Entity>> {
    return paginate<Entity>(options, this.repository, this.paginateConfig);
  }

  findOne(options: object): Promise<Entity | null> {
    return this.repository.findOne(options);
  }

  async update(id: string, entity: Partial<Entity>): Promise<Entity> {
    await this.repository.update(id, entity);
    return this.repository.findOne(id as any);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

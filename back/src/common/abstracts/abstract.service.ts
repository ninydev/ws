import { Injectable } from '@nestjs/common';
import { ObjectLiteral, Repository } from 'typeorm';

@Injectable()
export class AbstractService<Entity extends ObjectLiteral> {
  constructor(private readonly repository: Repository<Entity>) {}
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

  readAll(): Promise<Entity[]> {
    return this.repository.find();
  }

  // readPaginate({ page, limit }): Promise<[Entity[], number]> {
  //   return this.repository.findAndCount({
  //     take: limit,
  //     skip: limit * (page - 1),
  //   });
  // }

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

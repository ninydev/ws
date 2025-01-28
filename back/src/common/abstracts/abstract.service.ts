import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IAbstractEntity } from './interfaces/iabstract-entity.interface';

@Injectable()
export class AbstractService<Entity extends IAbstractEntity> {
  constructor(private readonly repository: Repository<Entity>) {}
  // async block(id: string): Promise<void> {
  //   await this.repository.update(id, { isBlocked: true });
  // }
  //
  // async unblock(id: string): Promise<void> {
  //   await this.repository.update(id, { isBlocked: false });
  // }

  findAll(): Promise<Entity[]> {
    return this.repository.find();
  }

  findOne(options: object): Promise<Entity | null> {
    return this.repository.findOne(options);
  }

  async removeById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

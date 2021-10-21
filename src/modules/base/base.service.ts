import { Injectable } from '@nestjs/common';
import { Base } from "../../entities/base.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BaseService<T extends Base>  {
  constructor(
    @InjectRepository(T)
    private _repo: Repository<T>
  ) {
  }

  findAll(): Promise<T[]> {
    return this._repo.find();
  }

  findOne(id: string): Promise<T> {
    return this._repo.findOne(id);
  }

  async add(value: T): Promise<void> {
    await this._repo.create(value)
  }

}

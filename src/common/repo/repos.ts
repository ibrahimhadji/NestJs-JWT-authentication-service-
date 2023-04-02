import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/user.schema';
@Injectable()
export class UserRepo<T> {
  constructor(@InjectModel(User.name) private model: Model<T>) {}
  async create(model: any) {
    const created = new this.model(model);
    return created;
  }
}

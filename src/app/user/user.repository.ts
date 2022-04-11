import { User, UserForCreate, UserForPresentation } from './models/user.model';
import { UsersModel } from './schema/user.schema';
import { IUsersRepository, IUserMapper } from './interfaces';

class UserMapper implements IUserMapper {
  transform(entity: any): User {
    return {
      _id: entity._id,
      email: entity.email,
      password: entity.password,
      isDeleted: entity.isDeleted,
    }
  }
}

export class UsersRepository implements IUsersRepository {
  private readonly database = UsersModel;
  private readonly mapper: UserMapper;
  
  constructor() {
    this.mapper = new UserMapper();
  }

  async create(user: UserForCreate): Promise<User> {
    let newUser = await this.database.create(user);
    return this.mapper.transform(newUser); 
  }
}

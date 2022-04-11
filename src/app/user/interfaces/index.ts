import { UserForCreate, User } from '../models/user.model';

export interface IUsersRepository {
  create(user: UserForCreate): Promise<User>;
}

export interface IUsersService {
  registerUser(user: UserForCreate): Promise<User>
}

export interface IUserMapper {
  transform(entity: any): User  
}

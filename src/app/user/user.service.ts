import { UserAlreadyExistsError } from './errors';
import { IUsersService } from './interfaces';
import { Either, Left, Right } from 'monet';
import { User, UserForCreate, UserForPresentation } from './models/user.model';
import { UsersRepository } from './user.repository';

export class UserService implements IUsersService {
  private readonly userRepo: UsersRepository;

  constructor() {
    this.userRepo = new UsersRepository();
  }
  
  async registerUser(user: UserForCreate): Promise<User> {
    let newUser = await this.userRepo.create(user);
    return newUser;
  }
}

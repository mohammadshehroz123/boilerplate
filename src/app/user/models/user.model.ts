export type User = {
  readonly _id: string;
  email: string;
  password: string;
  isDeleted: boolean;
};

export type UserForCreate = Omit<User, '_id' | 'isDeleted'>;

export type UserForPresentation = Omit<User, 'password' | 'isDeleted'> 


export type UserForUpdate = {
  email?: string;
  password?: string;
};

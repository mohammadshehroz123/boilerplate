import { 
    IsNotEmpty, 
    IsString, 
    IsEmail, 
    MinLength 
  } from 'class-validator';
  
  
  export class UserLoginDTO {
    
    @IsNotEmpty({
      message: 'Email is required',
    })
    @IsString({
      message: 'Email should be a String',
    })
    @IsEmail()
    email: string;
  
    @IsNotEmpty({
      message: 'Password is required',
    })
    @MinLength(8)
    password: string;
  
  }
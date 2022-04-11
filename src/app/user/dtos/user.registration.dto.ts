import { 
  IsNotEmpty, 
  IsString, 
  IsEmail, 
  MinLength, 
  IsOptional,
  IsEnum 
} from "class-validator";

export class UserRegistrationDTO {
  
  @IsNotEmpty({
    message: 'Username is required',
  })
  @IsString({
    message: 'Username should be a String',
  })
  username: string;

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
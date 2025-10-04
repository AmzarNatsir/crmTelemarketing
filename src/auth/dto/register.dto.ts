import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
  
  @IsNotEmpty()
  name: string;

  @IsOptional()
  role?: string;  // <--- tambahkan role

}

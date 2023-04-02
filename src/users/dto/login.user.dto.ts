import { IsNotEmpty } from 'class-validator';
export class LoginDtoUser {
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  password: string;
}

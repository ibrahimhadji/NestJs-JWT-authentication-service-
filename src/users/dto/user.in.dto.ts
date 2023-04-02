import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UserInDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'The unique name  (reference) of the user',
  })
  @IsNotEmpty()
  name: string;
  @ApiProperty({
    type: String,
    required: true,
    description: 'The unique name  (reference) of the user',
  })
  deviceId: string;

  email: string;
  password: string;
  gender: string;
  phone: string;
  bio: string;
}

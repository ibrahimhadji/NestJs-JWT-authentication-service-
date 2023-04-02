import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInDto } from './dto/user.in.dto';
import { pipe } from 'rxjs';
import { AuthenticationService } from 'src/authentication/authentication.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @UsePipes(ValidationPipe)
  @Post('create')
  addUser(@Body() user: UserInDto) {
    return this.usersService.create(user);
  }
}

import { Body, Controller, UseGuards } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { LoginDtoUser } from 'src/users/dto/login.user.dto';
import { AuthenticationService } from './authentication.service';
import { AtGuard } from './guards/authenticaoin.guard';
import { Public } from '../decorators/public.decorator';
@Controller('authenticaion')
export class AuthenticaionController {
  constructor(private authenticationService: AuthenticationService) {}
  @Post('login')
  async login(@Body() login: LoginDtoUser) {
    return this.authenticationService.singUpLocal(login.email, login.password);
  }
  @Public()
  @UseGuards(AtGuard)
  @Post('token')
  async verift(@Body() take: LoginDtoUser) {
    return 'successfully';
  }
}

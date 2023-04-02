import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { UserRepo } from 'src/common/repo/repos';
import { UserInDto } from './dto/user.in.dto';
import { AuthenticationService } from 'src/authentication/authentication.service';
@Injectable()
export class UsersService {
  constructor(
    private userReo: UserRepo<User>,
    private readonly authenticationSerive: AuthenticationService,
  ) {
    console.log(userReo);
  }
  async create(user: UserInDto) {
    const insertedUser = await this.userReo.create(user);
    return this.authenticationSerive.singUpLocal(
      insertedUser.id,
      insertedUser.email,
    );
  }
}

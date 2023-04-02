import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from './user.schema';
import { UsersService } from './users.service';
import { UserRepo } from 'src/common/repo/repos';
import { AuthenticationService } from 'src/authentication/authentication.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [
    JwtModule.register({}),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepo, AuthenticationService],
})
export class UsersModule {}

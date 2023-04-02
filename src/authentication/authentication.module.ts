import { Module } from '@nestjs/common';
import { AuthenticaionController } from './authenticaion.controller';
import { AuthenticationService } from './authentication.service';
import { JwtModule } from '@nestjs/jwt';
import { AccesTokenStrategy } from './strategies/access.token.strategy';
@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthenticaionController],
  exports: [AuthenticationService],
  providers: [AuthenticationService, AccesTokenStrategy],
})
export class AuthenticationModule {}

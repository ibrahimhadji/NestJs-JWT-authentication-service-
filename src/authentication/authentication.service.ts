import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthenticationService {
  constructor(private jwtService: JwtService, private config: ConfigService) {}
  async generateTokens(username: string, role: string) {
    const tokens = await Promise.all([
      this.jwtService.signAsync(
        { username, role },
        { secret: this.config.get('AT_SECRET'), expiresIn: '15m' },
      ),
      this.jwtService.signAsync(
        { username, role },
        { expiresIn: '7d', secret: this.config.get('RT_SECRET') },
      ),
    ]);
    return {
      access_token: tokens[0],
      refrech_token: tokens[1],
    };
  }
  async singUpLocal(id: string, email: string) {
    return this.generateTokens(id, email);
  }
}

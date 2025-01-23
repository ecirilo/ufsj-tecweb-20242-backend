import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validate(username: string, pass: string): any {
    if (username === 'admin' && pass === 'admin') {
      return { userId: 1, username: 'admin' };
    }
    return null;
  }

  token(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}

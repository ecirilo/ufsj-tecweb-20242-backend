import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('/api/login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() login: any): Promise<any> {
    const user = await this.authService.validate(login.nome, login.senha);

    if (!user) {
      throw new UnauthorizedException();
    }

    return this.authService.token(user);
  }
}

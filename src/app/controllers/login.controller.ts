import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Auth0Guard } from '../auth/auth0.guard';

@Controller('')
export class LoginController {
  @UseGuards(Auth0Guard)
  @Get('/login/oauth2/code/oidc')
  redirect(@Req() req: any, @Res() res: any): any {
    res.session = req.session;
    res.session.user = req.user;
    res.session.idToken = req.idToken;

    return res.redirect('http://localhost:4200/');
  }

  @Get('/oauth2/authorization/oidc')
  @UseGuards(Auth0Guard)
  loginAuth0(): void {
    return;
  }

  //https://dev-3pna8x3yxt3xtnvr.us.auth0.com/v2/logout?client_id=VKA5ADg8t1ah1wENlpEr8iTVqzXFIzcn&redirectTo=http://localhost:4200
  @Post('/api/logout')
  logoutAuth0(@Req() req: any): any {
    let idTokenFromSession;
    if (req.session && req.session.user) {
      idTokenFromSession = req.session.user.idToken;
      req.session.destroy();
      return {
        idToken: idTokenFromSession,
        logoutUrl: 'http://dev-3pna8x3yxt3xtnvr.us.auth0.com/v2/logout',
      };
    }
    return;
  }

  @Get('/api/usuarios/logados')
  getUsuarioLogado(@Req() req: any): any {
    if (!req.session) {
      return;
    }

    if (req.session.user) {
      return req.session.user;
    }

    return;
  }
}

import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class Auth0Guard extends AuthGuard('oauth2') {
  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();

    console.log("Session ============");
    console.log(request.session);
    console.log("============");

    if (request.session.user) {
      request.user = request.session.user;
      return true;
    }

    if (
      !request.url.includes('/login/oauth2/code/oidc?code=') &&
      !request.url.includes('/oauth2/authorization/oidc')
    ) {
      request.session.url = request.url;
    }
    return super.canActivate(context);
  }
}

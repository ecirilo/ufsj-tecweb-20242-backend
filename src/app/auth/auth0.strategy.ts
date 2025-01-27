import { Strategy } from 'passport-oauth2';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService} from '@nestjs/axios';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy) {
  constructor(private readonly httpService: HttpService) {
    super(
      {
        isserUri: 'https://dev-3pna8x3yxt3xtnvr.us.auth0.com/',
        authorizationURL: 'https://dev-3pna8x3yxt3xtnvr.us.auth0.com/authorize',
        tokenURL: 'https://dev-3pna8x3yxt3xtnvr.us.auth0.com/oauth/token',
        clientID: 'VKA5ADg8t1ah1wENlpEr8iTVqzXFIzcn',
        clientSecret:
          'w0BortsaCizMBAp9rYlP0XxxfknOWOKF08tfmyj36_UDOkMAjn5zQeT31-Jv-2mW',
        callbackURL: 'http://localhost:3000/login/oauth2/code/oidc',
        scope: 'openid profile email',
        state: true,
        pkce: true,
      },
      async (
        accessToken: any,
        refreshToken: any,
        params: any,
        user: any,
        done: any,
      ): Promise<any> => {
        const idToken: any = params.id_token;
        user.idToken = idToken;
        return done(null, user);
      },
    );
  }

  async userProfile(
    accessToken: string,
    done: (err?: unknown, profile?: any) => void,
  ): Promise<void> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          'https://dev-3pna8x3yxt3xtnvr.us.auth0.com/userinfo',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        ),
      );
      done(null, response.data);
    } catch (error) {
      throw new HttpException(
        'Erro ao recuperar o profile do Auht0',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}

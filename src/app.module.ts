import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestras.controller';
import { PalestrasService } from './app/services/palestras.service';
import { DatabaseModule } from './app/repositories/database.module';
import { AlunoController } from './app/controllers/alunos.controller';
import { PresencaController } from './app/controllers/presenca.controller';
import { AlunoService } from './app/services/alunos.service';
import { PresencaService } from './app/services/presenca.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './app/auth/strategy';
import { LoginController } from './app/controllers/login.controller';
import { AuthService } from './app/services/auth.service';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'tecwebSegredo',
      signOptions: { expiresIn: '2m' },
    }),
  ],
  controllers: [
    PalestraController,
    AlunoController,
    PresencaController,
    LoginController,
  ],
  providers: [
    PalestrasService,
    AlunoService,
    PresencaService,
    AuthService,
    JwtStrategy,
  ],
})
export class AppModule {}

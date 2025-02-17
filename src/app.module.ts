import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestras.controller';
import { PalestrasService } from './app/services/palestras.service';
import { DatabaseModule } from './app/repositories/database.module';
import { AlunoController } from './app/controllers/alunos.controller';
import { PresencaController } from './app/controllers/presenca.controller';
import { AlunoService } from './app/services/alunos.service';
import { PresencaService } from './app/services/presenca.service';
import { LoginController } from './app/controllers/login.controller';
import { Auth0Strategy } from './app/auth/auth0.strategy';
import { PassportModule } from '@nestjs/passport';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    DatabaseModule,
    HttpModule,
    PassportModule.register({ session: true }),
  ],
  controllers: [
    PalestraController,
    AlunoController,
    PresencaController,
    LoginController,
  ],
  providers: [PalestrasService, AlunoService, PresencaService, Auth0Strategy],
})
export class AppModule {}

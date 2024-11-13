import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestras.controller';
import { PalestrasService } from './app/services/palestras.service';
import { DatabaseModule } from './app/repositories/database.module';
import { AlunoController } from './app/controllers/alunos.controller';
import { PresencaController } from './app/controllers/presenca.controller';
import { AlunoService } from './app/services/alunos.service';
import { PresencaService } from './app/services/presenca.service';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    PalestraController,
    AlunoController,
    PresencaController
  ],
  providers: [
    PalestrasService,
    AlunoService,
    PresencaService
  ],
})
export class AppModule {}

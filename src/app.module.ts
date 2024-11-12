import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestras.controller';
import { PalestrasService } from './app/services/palestras.service';
import { PalestrasRepository } from './app/repositories/palestras.repository';

@Module({
  imports: [],
  controllers: [PalestraController],
  providers: [PalestrasService, PalestrasRepository],
})
export class AppModule {}

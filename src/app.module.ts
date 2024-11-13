import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestras.controller';
import { PalestrasService } from './app/services/palestras.service';
import { DatabaseModule } from './app/repositories/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PalestraController],
  providers: [PalestrasService],
})
export class AppModule {}

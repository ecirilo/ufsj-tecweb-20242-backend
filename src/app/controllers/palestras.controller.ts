import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PalestrasService } from '../services/palestras.service';
import { Palestra } from '../domain/palestra.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/palestras')
export class PalestraController {
  constructor(private readonly palestrasService: PalestrasService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getPalestras(): Promise<Palestra[]> {
    return this.palestrasService.getPalestras();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getPalestra(@Param('id') id: string): Promise<Palestra> {
    return this.palestrasService.getPalestra(Number(id));
  }

  @Post()
  createPalestra(@Body() palestra: Palestra): Promise<Palestra> {
    return this.palestrasService.createPalestras(palestra);
  }

  @Put(':id')
  updatePalestra(
    @Param('id') id: string,
    @Body() palestra: any,
  ): Promise<Palestra> {
    return this.palestrasService.updatePalestras(Number(id), palestra);
  }

  @Delete(':id')
  deletePalestra(@Param('id') id: string): Promise<void> {
    return this.palestrasService.deletePalestra(Number(id));
  }
}

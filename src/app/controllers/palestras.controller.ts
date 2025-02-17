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
import { Auth0Guard } from '../auth/auth0.guard';

@Controller('/api/palestras')
export class PalestraController {
  constructor(private readonly palestrasService: PalestrasService) {}

  @Get()
  getPalestras(): Promise<Palestra[]> {
    return this.palestrasService.getPalestras();
  }

  @Get(':id')
  getPalestra(@Param('id') id: string): Promise<Palestra> {
    return this.palestrasService.getPalestra(Number(id));
  }

  @Post()
  @UseGuards(Auth0Guard)
  createPalestra(@Body() palestra: Palestra): Promise<Palestra> {
    return this.palestrasService.createPalestras(palestra);
  }

  @Put(':id')
  @UseGuards(Auth0Guard)
  updatePalestra(
    @Param('id') id: string,
    @Body() palestra: any,
  ): Promise<Palestra> {
    return this.palestrasService.updatePalestras(Number(id), palestra);
  }

  @Delete(':id')
  @UseGuards(Auth0Guard)
  deletePalestra(@Param('id') id: string): Promise<void> {
    return this.palestrasService.deletePalestra(Number(id));
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Presenca } from '../domain/presenca.entity';
import { PresencaService } from '../services/presenca.service';
import { Aluno } from '../domain/aluno.entity';

@Controller('/api/presencas')
export class PresencaController {
  constructor(private readonly presencaService: PresencaService) {}

  @Get('/palestras/:id')
  getAllByPalestra(@Param('id') id: string): Promise<Aluno[]> {
    return this.presencaService.getAllByPalestra(Number(id));
  }

  @Post()
  registrarPresenca(@Body() presenca: Presenca): Promise<Presenca> {
    return this.presencaService.registrarPresenca(presenca);
  }
}

import { Body, Controller, Get, Head, Param, Post, Res, UseGuards } from '@nestjs/common';
import { Presenca } from '../domain/presenca.entity';
import { PresencaService } from '../services/presenca.service';
import { Aluno } from '../domain/aluno.entity';
import { Auth0Guard } from '../auth/auth0.guard';
import { Response } from 'express';

@Controller('/api/presencas')
export class PresencaController {
  constructor(private readonly presencaService: PresencaService) {}

  @Get()
  async getAll(): Promise<Presenca[]> {
    return this.presencaService.getAll();
  }

  @Get('/palestras/:id/alunos')
  @UseGuards(Auth0Guard)
  async getAllByPalestra(@Param('id') id: string): Promise<Aluno[]> {
    return this.presencaService.getAllByPalestra(Number(id));
  }

  @Head('/palestras/:id/')
  async contByPalestra(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const count: number = await this.presencaService.contByPalestra(Number(id));
    res.setHeader('X-Presenca-Count', String(count));
    res.status(200).send();
  }

  @Post()
  async registrarPresenca(@Body() presenca: Presenca): Promise<Presenca> {
    return this.presencaService.registrarPresenca(presenca);
  }
}

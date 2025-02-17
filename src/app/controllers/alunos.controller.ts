import {
  Body,
  Controller,
  Delete,
  Get,
  Head, HttpCode, Logger,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AlunoService } from '../services/alunos.service';
import { Aluno } from '../domain/aluno.entity';
import { Auth0Guard } from '../auth/auth0.guard';
import { Response } from 'express';

@Controller('/api/alunos')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Head()
  @UseGuards(Auth0Guard)
  async countAlunos(@Res() res: Response): Promise<void> {
    const count: number = await this.alunoService.count();
    res.setHeader('X-Total-Count', String(count)).status(200).end();
  }

  @Get()
  @UseGuards(Auth0Guard)
  async getAlunos(): Promise<Aluno[]> {
    return this.alunoService.getAll();
  }

  @Get(':id')
  @UseGuards(Auth0Guard)
  async getAluno(@Param('id') id: string): Promise<Aluno> {
    return this.alunoService.get(Number(id));
  }

  @Get('/matriculas/:matricula')
  async getAlunoByMatricula(
    @Param('matricula') matricula: string,
  ): Promise<Aluno> {
    return this.alunoService.getByMatricula(matricula);
  }

  @Post()
  @UseGuards(Auth0Guard)
  async createAluno(@Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.create(aluno);
  }

  @Put(':id')
  @UseGuards(Auth0Guard)
  async updateAluno(
    @Param('id') id: string,
    @Body() aluno: Aluno,
  ): Promise<Aluno> {
    return this.alunoService.update(Number(id), aluno);
  }

  @Delete(':id')
  @UseGuards(Auth0Guard)
  async deletePalestra(@Param('id') id: string): Promise<void> {
    return this.alunoService.delete(Number(id));
  }
}

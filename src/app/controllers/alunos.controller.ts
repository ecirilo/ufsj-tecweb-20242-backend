import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, UseGuards,
} from '@nestjs/common';
import { AlunoService } from '../services/alunos.service';
import { Aluno } from '../domain/aluno.entity';
import { Auth0Guard } from '../auth/auth0.guard';

@Controller('/api/alunos')
@UseGuards(Auth0Guard)
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Get()
  getAlunos(): Promise<Aluno[]> {
    return this.alunoService.getAll();
  }

  @Get(':id')
  getAluno(@Param('id') id: string): Promise<Aluno> {
    return this.alunoService.get(Number(id));
  }

  @Post()
  createAluno(@Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.create(aluno);
  }

  @Put(':id')
  updateAluno(@Param('id') id: string, @Body() aluno: Aluno): Promise<Aluno> {
    return this.alunoService.update(Number(id), aluno);
  }

  @Delete(':id')
  deletePalestra(@Param('id') id: string): Promise<void> {
    return this.alunoService.delete(Number(id));
  }
}

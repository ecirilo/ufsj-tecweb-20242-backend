import { Inject, Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from '../domain/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private readonly repository: Repository<Aluno>,
  ) {}

  async getAll(): Promise<Aluno[]> {
    Logger.log('Buscando todos os alunos');
    return this.repository.find();
  }

  async get(id: number): Promise<Aluno> {
    Logger.log(`Buscando aluno por id: ${id}`);
    return this.repository.findOneBy({ id });
  }

  async create(aluno: Aluno): Promise<Aluno> {
    Logger.log(`Criando aluno: ${aluno}`);
    return this.repository.save(aluno);
  }

  async update(id: number, aluno: Aluno): Promise<Aluno> {
    Logger.log(`Atualizando aluno: ${id} - ${JSON.stringify(aluno)}`);
    const existingAluno = await this.repository.findOneBy({
      id,
    });
    existingAluno.nome = aluno.nome;
    existingAluno.matricula = aluno.matricula;
    return this.repository.save(existingAluno);
  }

  async delete(id: number): Promise<void> {
    Logger.log(`Deletando aluno por id: ${id}`);
    await this.repository.delete({ id });
  }
}

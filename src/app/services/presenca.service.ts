import { Inject, Injectable } from '@nestjs/common';
import { Presenca } from '../domain/presenca.entity';
import { Repository } from 'typeorm';
import { Aluno } from '../domain/aluno.entity';

@Injectable()
export class PresencaService {

  constructor(
    @Inject('PRESENCA_REPOSITORY')
    private readonly repository: Repository<Presenca>,
  ) {}

  async registrarPresenca(presenca: Presenca): Promise<Presenca> {
    return this.repository.save(presenca);
  }

  async getAllByPalestra(id: number): Promise<Aluno[]> {
    const presencas = await this.repository.find({
      where: { palestra: { id } },
      relations: ['aluno'],
    });
    return presencas.map(presenca => presenca.aluno);
  }
}

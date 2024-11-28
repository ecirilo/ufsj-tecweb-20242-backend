import { Inject, Injectable, Logger } from '@nestjs/common';
import { Palestra } from '../domain/palestra.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PalestrasService {
  constructor(
    @Inject('PALESTRA_REPOSITORY')
    private readonly palestraRepository: Repository<Palestra>,
  ) {}

  async getPalestras(): Promise<Palestra[]> {
    Logger.debug('Buscando todas as palestras');
    return this.palestraRepository.find();
  }

  async getPalestra(id: number): Promise<Palestra> {
    Logger.debug(`Buscando palestra por id: ${id}`);
    return this.palestraRepository.findOneBy({ id });
  }

  createPalestras(palestra: Palestra): Promise<Palestra> {
    Logger.log(`Criando palestra: ${palestra}`);
    return this.palestraRepository.save(palestra);
  }

  async updatePalestras(id: number, palestra: Palestra): Promise<Palestra> {
    Logger.log(`Atualizando palestra: ${palestra}`);
    const exPalestra = await this.getPalestra(id);
    exPalestra.titulo = palestra.titulo;
    exPalestra.palestrante = palestra.palestrante;
    exPalestra.dataHora = palestra.dataHora;
    exPalestra.descricao = palestra.descricao;
    return this.palestraRepository.save(exPalestra);
  }

  async deletePalestra(id: number): Promise<void> {
    Logger.log(`Deletando palestra por id: ${id}`);
    await this.palestraRepository.delete(id);
  }
}

import { Injectable } from "@nestjs/common";
import { PalestrasRepository } from "../repositories/palestras.repository";
import { Palestra } from "../domain/palestra.entity";

@Injectable()
export class PalestrasService {

    constructor(
        private readonly palestraRepository: PalestrasRepository
    ) {}

    getPalestras(): Palestra[] {
        return this.palestraRepository.getAll();
    }

    getPalestra(id: number): Palestra {
        return this.palestraRepository.getById(id);
    }

    createPalestras(palestra: Palestra): Palestra {
        return this.palestraRepository.save(palestra);
    }

    updatePalestras(id: number, palestra: Palestra): Palestra {
        const exPalestra = this.palestraRepository.getById(id);
        exPalestra.titulo = palestra.titulo;
        exPalestra.descricao = palestra.descricao;
        exPalestra.palestrante = palestra.palestrante
        exPalestra.dataHora = palestra.dataHora;
        return this.palestraRepository.save(exPalestra);
    }

    deletePalestras(id: number): void {
        this.palestraRepository.delete(id);
        return;
    }
}
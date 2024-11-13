import { Inject, Injectable } from "@nestjs/common";
import { Palestra } from "../domain/palestra.entity";
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class PalestrasService {

    constructor(
        @Inject("PALESTRA_REPOSITORY")
        private readonly palestraRepository: Repository<Palestra>
    ) {}

    async getPalestras(): Promise<Palestra[]> {
        return this.palestraRepository.find();
    }

    async getPalestra(id: number): Promise<Palestra> {
        return this.palestraRepository.findOne({
            where: {id}
        });
    }

    createPalestras(palestra: Palestra): Promise<Palestra> {
        return this.palestraRepository.save(palestra);
    }

    async updatePalestras(id: number, palestra: Palestra): Promise<Palestra> {
        const exPalestra = await this.getPalestra(id);
        exPalestra.titulo = palestra.titulo;
        exPalestra.palestrante = palestra.palestrante;
        exPalestra.dataHora = palestra.dataHora;
        exPalestra.descricao = palestra.descricao;
        return this.palestraRepository.save(exPalestra);
    }

    async deletePalestra(id: number): Promise<void> {
        await this.palestraRepository.delete(id);
    }
}
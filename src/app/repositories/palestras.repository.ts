import { Injectable } from "@nestjs/common";
import { Palestra } from "../domain/palestra.entity";

@Injectable()
export class PalestrasRepository {
    private palestras: Palestra[] = [
        {
            "id": 1,
            "titulo": "TecWeb 2025",
            "palestrante": "Elder Cirilo",
            "dataHora": 391820391208,
            "descricao": "Palestra sobre TecWeb"
        },
        {
            "id": 2,
            "titulo": "TecWeb 2023",
            "palestrante": "Elder Cirilo",
            "dataHora": 391820391208,
            "descricao": "Palestra sobre TecWeb"
        },
        {
            "id": 3,
            "titulo": "TecWeb 2022",
            "palestrante": "Elder Cirilo",
            "dataHora": 391820391208,
            "descricao": "Palestra sobre TecWeb"
        }
    ]

    getAll(): Palestra[] {
        return this.palestras;
    }

    getById(id: number): Palestra {
        const palestra = this.palestras.find((_palestra) => 
            _palestra.id === id 
        );
        return palestra;
    }

    save(palestra: Palestra) {
        if (!palestra.id) {
            return this.add(palestra);
        }

        return this.update(palestra);
    }

    delete(id: number): void {
        this.palestras = this.palestras.filter((_palestra) => 
            _palestra.id !== id
        );
        return;
    }

    private add(palestra: Palestra): Palestra {
        palestra.id = this.palestras.slice(-1)[0].id + 1;
        this.palestras.push(palestra);
        return palestra;
    }

    private update(palestra: Palestra): Palestra {
        const palestraId = palestra.id;
        this.palestras[palestraId - 1] = palestra;
        return palestra;
    }
}
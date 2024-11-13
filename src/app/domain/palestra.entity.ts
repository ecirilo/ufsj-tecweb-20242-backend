import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Presenca } from "./presenca.entity";

@Entity("palestras")
export class Palestra {


    @PrimaryGeneratedColumn({ name: "palestra_id"})
    id: number;

    @Column({ 
        name: "titulo", 
        type: "varchar", 
        length: 255
    })
    titulo: string;

    @Column({ 
        name: "palestrante", 
        type: "varchar", 
        length: 255
    })
    palestrante: string;
    
    @Column({
        name: "data_hora",
        type: "datetime"
    })
    dataHora: Date;

    @Column({
        name: "descricao",
        type: "text"
    })
    descricao: string;

    @OneToMany(() => Presenca, (presenca: Presenca) => presenca.palestra)
    presencas: Presenca[];

}
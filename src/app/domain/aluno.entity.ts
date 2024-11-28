import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Presenca } from './presenca.entity';

@Entity('aluno')
export class Aluno {
  @PrimaryGeneratedColumn({ name: 'aluno_id' })
  id: number;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @OneToMany(() => Presenca, (presenca: Presenca) => presenca.aluno)
  presencas: Presenca[];
}

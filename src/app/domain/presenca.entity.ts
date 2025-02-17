import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Palestra } from './palestra.entity';
import { Aluno } from './aluno.entity';

@Entity('presenca')
export class Presenca {
  @PrimaryGeneratedColumn({ name: 'presenca_id' })
  id: number;

  @ManyToOne(() => Aluno, (aluno: Aluno) => aluno.presencas,
  {
    eager: true,
  })
  @JoinColumn({ name: 'aluno_id' })
  aluno: Aluno;

  @ManyToOne(() => Palestra, (palestra: Palestra) => palestra.presencas,
  {
    eager: true,
  })
  @JoinColumn({ name: 'palestra_id' })
  palestra: Palestra;
}

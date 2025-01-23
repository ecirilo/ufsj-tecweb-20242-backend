import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Presenca } from './presenca.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

@Entity('palestras')
export class Palestra {
  @ApiProperty({
    name: 'id',
    type: 'number',
    description: 'Identificador da palestra',
  })
  @PrimaryGeneratedColumn({ name: 'palestra_id' })
  id: number;

  @ApiProperty({
    name: 'titulo',
    type: 'string',
    description: 'Título da palestra',
  })
  @IsNotEmpty()
  @Column({
    name: 'titulo',
    type: 'varchar',
    length: 255,
  })
  titulo: string;

  @ApiProperty({
    name: 'palestrante',
    type: 'string',
    description: 'Palestrante da palestra',
  })
  @IsNotEmpty()
  @Column({
    name: 'palestrante',
    type: 'varchar',
    length: 255,
  })
  palestrante: string;

  @ApiProperty({
    name: 'dataHora',
    type: 'string',
    description: 'Data e hora da palestra',
  })
  @Column({
    name: 'data_hora',
    type: 'datetime',
    nullable: true,
  })
  dataHora: Date;

  @ApiProperty({
    name: 'descricao',
    type: 'string',
    description: 'Descrição da palestra',
  })
  @IsNotEmpty()
  @Column({
    name: 'descricao',
    type: 'text',
    nullable: true,
  })
  descricao: string;

  @OneToMany(
    (): typeof Presenca => Presenca,
    (presenca: Presenca): Palestra => presenca.palestra,
  )
  presencas: Presenca[];
}

import { DataSource } from "typeorm";
import { Palestra } from "../domain/palestra.entity";
import { Presenca } from "../domain/presenca.entity";
import { Aluno } from "../domain/aluno.entity";

export const repositoryProvider = [
    {
        provide: 'PRESENCA_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Presenca),
        inject: ['MYSQL_DATA_SOURCE'],
      },
      {
        provide: 'PALESTRA_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Palestra),
        inject: ['MYSQL_DATA_SOURCE'],
      },
      {
        provide: 'ALUNO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Aluno),
        inject: ['MYSQL_DATA_SOURCE'],
      },
];
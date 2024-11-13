import { DataSource } from "typeorm";
import { Palestra } from "../domain/palestra.entity";

export const repositoryProvider = [
    {
        provide: "PALESTRA_REPOSITORY",
        useFactory: (dataSource: DataSource) => 
            dataSource.getRepository(Palestra),
        inject: ["MYSQL_DATA_SOURCE"]
    }
];
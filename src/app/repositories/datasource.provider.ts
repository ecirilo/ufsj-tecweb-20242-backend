import { DataSource } from "typeorm";

export const datasourceProvider = [
{
    provide: 'MYSQL_DATA_SOURCE',
    useFactory: async (): Promise<DataSource> => {
        const datasource: DataSource = new DataSource({
            type: "mysql",
            host: "127.0.0.1",
            port: 3307,
            username: "tecweb",
            password: "tec@web",
            database: "tecweb",
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: false
        });
        return datasource.initialize();
    }
}
];
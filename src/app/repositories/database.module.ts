import { Module } from "@nestjs/common";
import { datasourceProvider } from "./datasource.provider";
import { repositoryProvider } from "./repository.provider";

@Module({
    providers: [...datasourceProvider, ...repositoryProvider],
    exports:[...datasourceProvider, ...repositoryProvider]
})
export class DatabaseModule {}
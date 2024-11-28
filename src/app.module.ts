import { Module } from '@nestjs/common';
import { PalestraController } from './app/controllers/palestras.controller';
import { PalestrasService } from './app/services/palestras.service';
import { DatabaseModule } from './app/repositories/database.module';
import { AlunoController } from './app/controllers/alunos.controller';
import { PresencaController } from './app/controllers/presenca.controller';
import { AlunoService } from './app/services/alunos.service';
import { PresencaService } from './app/services/presenca.service';
import {
  CacheInterceptor,
  CacheModule,
  CacheStore,
} from '@nestjs/cache-manager';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RedisStore, redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    DatabaseModule,
    CacheModule.registerAsync({
      useFactory: async (): Promise<{ store: CacheStore }> => {
        const store: RedisStore<any> = await redisStore({
          socket: {
            host: 'localhost',
            port: 6380,
          },
        });

        return {
          store: store as unknown as CacheStore,
        };
      },
    }),
  ],
  controllers: [PalestraController, AlunoController, PresencaController],
  providers: [
    PalestrasService,
    AlunoService,
    PresencaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}

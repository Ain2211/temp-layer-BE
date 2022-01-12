import { LoggerMiddleware } from '@/shares/middlewares/logger.middleware';
import { AuthModule } from '@components/auth/auth.module';
import { ConfigsModule } from '@components/config/config.module';
import { RebalancerModule } from '@components/rebalancer/rebalancer.module';
import { UserModule } from '@components/user/user.module';
import {
  defaultConfig,
  masterConfig,
  replicaConfig,
} from '@database/config/config';
import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsoleModule } from 'nestjs-console';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConsoleModule,
    TypeOrmModule.forRoot(defaultConfig),
    TypeOrmModule.forRoot(masterConfig),
    TypeOrmModule.forRoot(replicaConfig),
    AuthModule,
    UserModule,
    ConfigsModule,
    RebalancerModule,
  ],
  controllers: [],
  providers: [Logger],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}

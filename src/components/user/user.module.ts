import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '@components/user/user.controller';
import { UserRepository } from '@repositories/user.repository';
import { UserService } from '@components/user/user.service';
import { MASTER_DB, REPLICA_DB } from '@database/config/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository], MASTER_DB),
    TypeOrmModule.forFeature([UserRepository], REPLICA_DB),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

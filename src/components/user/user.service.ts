import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '@components/user/entity/user.entity';
import { CreateUserDto } from '@components/user/dto/create-user.dto';
import { UserRepository } from 'src/repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ChangePassDto } from '@components/user/dto/change-pass.dto';
import { MASTER_DB, REPLICA_DB } from '@database/config/config';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository, MASTER_DB)
    private readonly userRepository: UserRepository,
    @InjectRepository(UserRepository, REPLICA_DB)
    private readonly userRepositoryReplica: UserRepository,
  ) {}

  async findUserByEmail(email: string): Promise<User> {
    return this.userRepositoryReplica.findOne({
      where: {
        email: email,
      },
    });
  }

  async findOne(id: string | number): Promise<User> {
    const rs = await this.userRepositoryReplica.findOne(id);

    if (!rs) {
      throw new HttpException(
        { key: 'User not exists' },
        HttpStatus.BAD_REQUEST,
      );
    }
    return rs;
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = userDto.email;
    user.password = userDto.password;
    return this.userRepository.save(user);
  }

  async changePassword(
    changePassDto: ChangePassDto,
    userId: string | number,
  ): Promise<void> {
    const user = await this.findOne(userId);

    if (!user) {
      throw new HttpException(
        { key: 'User not exists' },
        HttpStatus.BAD_REQUEST,
      );
    }

    const correctPass = await bcrypt.compare(
      changePassDto.password,
      user.password,
    );
    if (!correctPass) {
      throw new HttpException(
        { key: 'Password Incorrect' },
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    user.password = await bcrypt.hashSync(
      changePassDto.new_password,
      bcrypt.genSaltSync(Number(process.env.SALT_ROUND)),
    );

    await this.userRepository.save(user);
  }
}

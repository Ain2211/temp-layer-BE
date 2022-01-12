import { EntityRepository, Repository } from 'typeorm';
import { User } from '@components/user/entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}

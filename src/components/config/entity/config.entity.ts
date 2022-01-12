import {
  ConfigRestartStatus,
  ConfigStatus,
} from '@components/config/enums/config.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'configs' })
export class Config {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    unique: true,
  })
  rebalancer_address: string;

  @Column({
    default: 5,
  })
  upper_value: number;

  @Column({
    default: 5,
  })
  lower_value: number;

  @Column({
    default: 1,
  })
  price_move: number;

  @Column({
    default: ConfigStatus.RUNNING, // 0: stopped, 1: running
  })
  running: ConfigStatus;

  @Column({
    default: ConfigRestartStatus.NO, // 0: stopped, 1: running
  })
  need_restart_rebalance: ConfigRestartStatus;

  @Column()
  token0: string;

  @Column()
  token1: string;

  @Column()
  fee: number;

  @Column({
    nullable: true,
  })
  uid: string; // update user id

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

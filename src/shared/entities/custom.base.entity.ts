/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class CustomBaseEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public readonly id: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  public updatedAt?: Date;

  @DeleteDateColumn({ nullable: true })
  public deletedAt?: Date;
}

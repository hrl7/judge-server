import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({unique: true})
  @Column({ nullable: false })
  email: string;

  @Column({ default: 'NONE' })
  name: string;

  @Column({ nullable: false })
  passwordHash: string;
}

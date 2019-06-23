import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Problem {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ nullable: false })
  name: string;

  @Column('text')
  statement: string;

  @ManyToOne(type => User, user => user.problems, {nullable: false})
  author: User;
}

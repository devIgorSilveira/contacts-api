import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 127 })
  first_name: string;

  @Column({ length: 127 })
  last_name: string;

  @Column({ length: 127, unique: true })
  email: string;

  @Column({ length: 155 })
  password: string;

  @Column({ length: 11 })
  phone: string;

  @CreateDateColumn()
  createdAt: Date;
}

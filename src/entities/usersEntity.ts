import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Contact } from "./contactsEntity";

@Entity("users")
export class User {
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

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}

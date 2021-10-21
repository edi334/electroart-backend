import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  isPublished: boolean;

  @Column()
  created: Date;

  @Column()
  updated: Date;

  @Column()
  name: string;
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Base {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ default: false })
  isPublished: boolean;
  
  @Column()
  created: Date;
  
  @Column()
  updated: Date;
}

import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Student extends Base {
  @Column()
  name: string;
}

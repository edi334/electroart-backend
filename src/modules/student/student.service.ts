import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Student } from "./student.entity";
import { StudentDto } from "./student.dto";
import { Repository } from "typeorm";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly _studentRepo: Repository<Student>
  ) {
  }

  async findAll(): Promise<Student[]> {
    return await this._studentRepo.find();
  }

  async findOne(id: string): Promise<Student> {
    const student = await this._studentRepo.findOne(id);
    if (!student) {
      throw new NotFoundException(`Student with id: ${id} not found!`);
    }
    return student;
  }

  async add(studentDto: StudentDto): Promise<void> {
    const { name, isPublished } = studentDto;
    const student = new Student();
    student.name = name;
    student.isPublished = isPublished;
    student.created = new Date();
    student.updated = new Date();

    try {
      await this._studentRepo.save(student);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async edit(id: string, studentDto: StudentDto): Promise<void> {
    const student = await this._studentRepo.findOne(id);
    if (!student) {
      throw new NotFoundException(`Student with id: ${id} not found!`);
    }

    const { name, isPublished } = studentDto;
    student.name = name;
    student.isPublished = isPublished;
    student.updated = new Date();

    try {
      await this._studentRepo.save(student);
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string): Promise<void> {
    const student = await this._studentRepo.findOne(id);
    if (!student) {
      throw new NotFoundException(`Student with id: ${id} not found!`);
    }
    await this._studentRepo.remove(student);
  }
}

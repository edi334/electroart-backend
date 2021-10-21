import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "./student.entity";
import { StudentDto } from "./student.dto";

@Controller('student')
export class StudentController {
  constructor(
    private readonly _studentService: StudentService
  ) {
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return await this._studentService.findAll();
  }

  @Get('/:studentId')
  async findOne(@Param('studentId') studentId: string): Promise<Student> {
    return await this._studentService.findOne(studentId);
  }

  @Post()
  async create(@Body() studentDto: StudentDto): Promise<void> {
    await this._studentService.add(studentDto);
  }

  @Patch('/:studentId')
  public async update(
    @Body() studentDto: StudentDto,
    @Param('studentId') studentId: string,
  ): Promise<void> {
    await this._studentService.edit(
      studentId,
      studentDto,
    );
  }

  @Delete('/:studentId')
  public async delete(@Param('studentId') studentId: string): Promise<void> {
    await this._studentService.remove(studentId);
  }
}

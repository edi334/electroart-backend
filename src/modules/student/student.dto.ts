import { IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class StudentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsBoolean()
  @IsNotEmpty()
  isPublished: boolean;
}

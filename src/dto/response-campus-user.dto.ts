import { ResponseUserDto } from "./response-user.dto";

export class ResponseCampusUserDto extends ResponseUserDto {
  campusId!: string;

  constructor(partial: Partial<ResponseCampusUserDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}

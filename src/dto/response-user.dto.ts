import { ResponseBaseEntity } from "./response-base-entity.dto";

export class ResponseUserDto extends ResponseBaseEntity {
  // @AutoMap()
  name!: string

  constructor(partial: Partial<ResponseUserDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}

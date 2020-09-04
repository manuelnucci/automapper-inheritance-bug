
export class ResponseBaseEntity {
  // @AutoMap()
  id!: string;

  constructor(partial: Partial<ResponseBaseEntity>) {
    Object.assign(this, partial);
  }
}

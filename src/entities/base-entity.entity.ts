
export class BaseEntity {
  // @AutoMap()
  readonly id!: string;

  constructor(partial: Partial<BaseEntity>) {
    Object.assign(this, partial);
  }
}

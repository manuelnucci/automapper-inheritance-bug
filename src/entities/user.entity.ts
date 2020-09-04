import { BaseEntity } from "./base-entity.entity";

export class User extends BaseEntity {
  // @AutoMap()
  name!: string

  constructor(partial: Partial<User>) {
    super(partial);
    Object.assign(this, partial);
  }
}

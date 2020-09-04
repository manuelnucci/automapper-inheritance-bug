import { User } from "./user.entity";

export class CampusUser extends User {
  campusId!: string;

  constructor(partial: Partial<CampusUser>) {
    super(partial);
    Object.assign(this, partial);
  }
}

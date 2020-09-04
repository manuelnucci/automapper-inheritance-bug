import { Injectable } from '@nestjs/common';
import { CampusUser } from './entities/campus-user.entity';

@Injectable()
export class AppService {
  async findAllCampusUsers() {
    return [
      new CampusUser({
        id: 'id',
        name: 'name',
        campusId: 'campusId'
      })
    ]
  }
}

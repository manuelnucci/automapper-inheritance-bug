import { AutoMapper, Profile, ProfileBase } from 'nestjsx-automapper';
import { ResponseUserDto } from 'src/dto/response-user.dto';
import { User } from 'src/entities/user.entity';
import { ResponseCampusUserDto } from '../dto/response-campus-user.dto';
import { CampusUser } from '../entities/campus-user.entity';

@Profile()
export class CampusUserProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(CampusUser, ResponseCampusUserDto, { includeBase: [User, ResponseUserDto] })
  }
}

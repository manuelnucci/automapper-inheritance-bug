import { AutoMapper, Profile, ProfileBase } from 'nestjsx-automapper';
import { ResponseBaseEntity } from 'src/dto/response-base-entity.dto';
import { BaseEntity } from 'src/entities/base-entity.entity';
import { ResponseUserDto } from '../dto/response-user.dto';
import { User } from '../entities/user.entity';

@Profile()
export class UserProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(User, ResponseUserDto, { includeBase: [BaseEntity, ResponseBaseEntity] });
  }
}

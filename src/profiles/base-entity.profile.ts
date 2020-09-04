import { AutoMapper, Profile, ProfileBase } from 'nestjsx-automapper';
import { ResponseBaseEntity } from 'src/dto/response-base-entity.dto';
import { BaseEntity } from 'src/entities/base-entity.entity';

@Profile()
export class BaseEntityProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(BaseEntity, ResponseBaseEntity);
  }
}

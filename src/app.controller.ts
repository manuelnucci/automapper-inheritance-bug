import { Controller, Get } from '@nestjs/common';
import { AutoMapper, InjectMapper } from 'nestjsx-automapper';
import { AppService } from './app.service';
import { ResponseCampusUserDto } from './dto/response-campus-user.dto';

@Controller('/users/campus')
export class AppController {
  constructor(private readonly appService: AppService, @InjectMapper() private readonly mapper: AutoMapper) { }

  @Get()
  async getCampusUsers() {
    return this.mapper.mapArray(await this.appService.findAllCampusUsers(), ResponseCampusUserDto);
  }
}

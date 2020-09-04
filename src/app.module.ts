import { Module } from '@nestjs/common';
import { AutomapperModule } from 'nestjsx-automapper';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Profiles
import './profiles/base-entity.profile';
import './profiles/campus-user.profile';
import './profiles/user.profile';

@Module({
  imports: [
    AutomapperModule.withMapper(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

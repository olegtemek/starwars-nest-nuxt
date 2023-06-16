import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

import { SwapiService } from 'src/swapi/swapi.service';

@Global()
@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [SwapiService],
  exports: [SwapiService],
})
export class SwapiModule {}

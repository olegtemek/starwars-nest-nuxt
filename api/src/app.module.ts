import { Module } from '@nestjs/common';
import { SearchModule } from './search/search.module';
import { SwapiModule } from './swapi/swapi.module';

@Module({
  imports: [SearchModule, SwapiModule],
})
export class AppModule {}

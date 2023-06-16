import { Injectable, NotFoundException } from '@nestjs/common';
import { SwapiService } from 'src/swapi/swapi.service';

@Injectable()
export class SearchService {
  constructor(private readonly swapiService: SwapiService) {}
  async search(query: string) {
    // get {planets, peoples, starships}
    const result = await this.swapiService.search(query);

    // add total count in arrays
    const total = {
      ...result,
      total:
        result.peoples.length + result.planets.length + result.starships.length,
    };
    return total;
  }
}

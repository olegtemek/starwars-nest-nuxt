import { IPeopleFull } from './IPeople';
import { IPlanetFull } from './IPlanet';
import { IStarships } from './iStarships';

export interface ISwapiRequest {
  count: number;
  previous: string | null;
  next: string;
  results: IPeopleFull[] | IPlanetFull[] | IStarships[];
}

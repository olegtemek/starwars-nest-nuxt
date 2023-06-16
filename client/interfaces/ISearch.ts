import { IPeople } from "./IPeople";
import { IPlanet } from "./IPlanet";
import { IStarship } from "./IStarship";

export interface ISearch {
  peoples: IPeople[];
  planets: IPlanet[];
  starships: IStarship[];
  total: number;
}

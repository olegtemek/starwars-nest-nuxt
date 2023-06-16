import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { IPeopleFull } from './interfaces/IPeople';
import { IPeople } from './interfaces/IPeople';
import { IPlanet, IPlanetFull } from './interfaces/IPlanet';
import { ISwapiRequest } from './interfaces/ISwapi';
import { IStarships, IStarshipsFull } from './interfaces/iStarships';

@Injectable()
export class SwapiService {
  private url: string = 'https://swapi.dev/api';
  constructor(private readonly httpService: HttpService) {}

  async search(query: string) {
    const peoples: IPeople[] = await this.getPeoples(query);
    const planets: IPlanet[] = await this.getPlanets(query);
    const starships: IStarships[] = await this.getStarships(query);

    const result = {
      peoples,
      planets,
      starships,
    };

    return result;
  }

  private async getPeoples(q: string): Promise<IPeople[]> {
    //get response for people by query search
    const { data }: { data: ISwapiRequest } =
      await this.httpService.axiosRef.get(`${this.url}/people?search=${q}`);

    if (data.results.length < 1) {
      return [];
    }

    // get all results without pagination like [...results] from requests
    const results: IPeopleFull[] = await this.getAllResults(
      `${this.url}/people`,
      data,
    );

    //sort leaving only the name,length,crew,cost_in_credits
    const sortResult: IPeople[] = results.map((item) => ({
      name: item.name,
      height: item.height,
      mass: item.mass,
      gender: item.gender,
    }));

    return sortResult;
  }

  private async getPlanets(q: string): Promise<IPlanet[]> {
    //get response for planets by query search
    const { data }: { data: ISwapiRequest } =
      await this.httpService.axiosRef.get(`${this.url}/planets?search=${q}`);

    if (data.results.length < 1) {
      return [];
    }

    // get all results without pagination like [...results] from requests
    const results: IPlanetFull[] = await this.getAllResults(
      `${this.url}/planets`,
      data,
    );

    //sort leaving only the name,length,crew,cost_in_credits
    const sortResult: IPlanet[] = results.map((item) => ({
      name: item.name,
      diameter: item.diameter,
      population: item.population,
    }));

    return sortResult;
  }

  private async getStarships(q: string): Promise<IStarships[]> {
    //get response for starships by query search
    const { data }: { data: ISwapiRequest } =
      await this.httpService.axiosRef.get(`${this.url}/starships?search=${q}`);

    if (data.results.length < 1) {
      return [];
    }

    // get all results without pagination like [...results] from requests
    const results: IStarshipsFull[] = await this.getAllResults(
      `${this.url}/starships`,
      data,
    );

    //sort leaving only the name,length,crew,cost_in_credits

    const sortResult: IStarships[] = results.map((item) => ({
      name: item.name,
      length: item.length,
      crew: item.crew,
      cost_in_credits: item.cost_in_credits,
    }));

    return sortResult;
  }

  private async getAllResults<
    T extends IPeopleFull | IPlanetFull | IStarshipsFull,
  >(url: string, data: ISwapiRequest) {
    let results: ISwapiRequest[] = [data];

    const count = data.count;

    //get number pagination pages in response
    const numberOfPagesLeft: number = Math.ceil((count - 1) / 10);

    //if have a pagination then axios this page
    for (let i = 2; i <= numberOfPagesLeft; i++) {
      let { data } = await this.httpService.axiosRef.get(`${url}?page=${i}`);
      results.push(data);
    }

    // concat result responses without count, next, previous. Only results like [...results]
    const result: T[] = results.reduce(function (result, obj) {
      return result.concat(obj.results);
    }, []);

    return result;
  }
}

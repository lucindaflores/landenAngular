import { Service } from '@angular/core';
import {Landen} from './landen';

//http://localhost:8080/landen/aantal
@Service()
export class LandenService {

  private readonly landenUrl = 'http://localhost:8080/landen/aantal';

    //'https://landen-mqok.onrender.com/aantal';

  async getAantal(): Promise<Landen> {
    const data = await fetch(this.landenUrl);
    console.log("STARTS FETCCH");
    console.log("DATA!" + data);
    return (await data.json() ?? 0);
  }
}

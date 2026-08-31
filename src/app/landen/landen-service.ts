import { Service } from '@angular/core';

@Service()
export class LandenService {

  private readonly landenUrl = 'https://landen-mqok.onrender.com/landen/aantal';

  /* GETS DATA FROM LOCALHOST */
  async getAantal(): Promise<number> {
    const data = await fetch(this.landenUrl);
    console.log("STARTS FETCCH");
    console.log("DATA!" + data);
    return (await data.json() ?? 0);
  }

}

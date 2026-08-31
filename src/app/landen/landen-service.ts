import { Service } from '@angular/core';


//http://localhost:8080/landen/aantal
@Service()
export class LandenService {

  private readonly landenUrl = 'http://localhost:8080/landen/aantal';

    //'https://landen-mqok.onrender.com/aantal';

  /* GETS DATA FROM LOCALHOST */
  async getAantal(): Promise<number> {
    const data = await fetch(this.landenUrl);
    console.log("STARTS FETCCH");
    console.log("DATA!" + data);
    return (await data.json() ?? 0);
  }

  // private readonly renderUrl = 'https://landen-mqok.onrender.com/aantal';
  // async getAantalRender(): Promise<number> {
  //   const data = await fetch(this.renderUrl);
  //   console.log("STARTS FETCCH");
  //   console.log("DATA!" + data);
  //   return (await data.json() ?? 0);
  // }
}

import { Service } from '@angular/core';

@Service()
export class LandenService {

  private readonly landenUrl = 'https://landen-mqok.onrender.com/landen/aantal';

  async getAantal(): Promise<number> {
    const response = await fetch(this.landenUrl);
    console.log("STARTS FETCH");
    console.log("DATA!" + response);

    if (response.status === 404) {
      throw new Error('NOT_FOUND');
    }

    if (!response.ok) {
      throw new Error('REQUEST_ERROR');
    }

    return (await response.json() ?? 0);
  }

}

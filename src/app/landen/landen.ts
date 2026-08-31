import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {LandenService} from './landen-service';

@Component({
  imports: [],
  selector: 'app-landen',
  styleUrl: './landen.css',
  templateUrl: './landen.html',
})
export class Landen {

  private landenService = inject(LandenService);
   private changeDetectorRef = inject(ChangeDetectorRef);

   aantal: number = 0;

  constructor() {
     this.fetchLanden().then();
  }
  async fetchLanden() {

    try {
      this.aantal = await this.landenService.getAantal();
      console.log(this.aantal);
      console.log("HERE");


    } catch (error) {
      console.error(error);
      console.log(error);


    }

    this.changeDetectorRef.detectChanges();
  }

}

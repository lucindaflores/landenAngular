import { ChangeDetectorRef, Component, inject} from '@angular/core';
import { LandenService } from './landen-service';

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
  errorMessage: string = '';


  constructor() {
    this.fetchLanden().then();
  }

  async fetchLanden() {

    this.errorMessage = '';

    try {
      this.aantal = await this.landenService.getAantal();
      console.log("LANDEN", this.aantal);

    } catch (error) {
      if (error instanceof Error && error.message === 'NOT_FOUND') {
        this.errorMessage = 'De release ID was niet gevonden. Probeer het opnieuw';
      } else {
        this.errorMessage = 'Er is een fout opgetreden.';
      }
      console.log(error);
    }

    this.changeDetectorRef.detectChanges();
  }

}

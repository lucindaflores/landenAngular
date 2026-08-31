import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Landen} from './landen/landen';

@Component({
  imports: [RouterOutlet, Landen],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('landenAngular');
}

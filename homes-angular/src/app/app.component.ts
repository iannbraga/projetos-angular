import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <h1>Homes</h1>
  <app-home></app-home>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}

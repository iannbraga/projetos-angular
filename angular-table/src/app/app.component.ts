import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-table';
  colunas: string[] = ['nome']
  lista: string[] = [
    'Teste',
    'Teste',
    'Teste',
    'Teste'
]

}

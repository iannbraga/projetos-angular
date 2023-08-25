import { Component, Input } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  @Input() tarefa!: Tarefa;

}

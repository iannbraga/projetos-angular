import { Component } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {

  tarefas: Tarefa[] = []


  tarefa: Tarefa = {
    'id': 2,
    'title': 'Teste',
    'description': '',
    'completed': false
  }

  displayedColumns = ['id', 'title', 'description', 'completed']

  constructor( private tarefaService: TarefaService){}

  ngOnInit(): void {
    this.tarefaService.getTarefas().subscribe(
      (dados) => {
        this.tarefas = dados;
      },
      (erro) => {
        console.log("Erro: ", erro)
      }
    );
  }

}

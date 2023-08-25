import { Tarefa } from './../models/tarefa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTarefas(): Observable<[Tarefa]> {
    const url = `${this.baseURL}/tasks.json`;
    return this.http.get<any>(url);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodosDataType } from '../interfaces/todos.data.interface';
import { TodosData } from '../mocks/todos.mocks';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor() { 
  }

  public getTodos = (): Observable<TodosDataType[]> => {
    return of(TodosData); // simulate getting data from the server
  }
}

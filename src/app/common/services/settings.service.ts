import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from './api.service';
import { CommonService } from './common.service';
import { TodosDataType } from '../interfaces/todos.data.interface';

@Injectable({
  providedIn: 'root',
})

export class SettingsService {
  private _todos: TodosDataType[];
  private _searchText: string;
  public todosSubject$ = new Subject<TodosDataType[]>();
  public searchSubject$ = new Subject<string>();

  constructor(
    private apiService : ApiService,
    private commonService : CommonService
  ) { 
    this.init();
  }

  private init(): void {
    this.apiService.getTodos().subscribe(
      (todos : TodosDataType[]) => { this._todos = todos; },
      (err: any)=> console.error('Observer got an error: ' + err),
      () => { this.todosSubject$.next(this._todos); }
    );
    this.commonService.addFont();
  }

  public set todos(data : TodosDataType[]) {
    this._todos = data;
    this.todosSubject$.next(this._todos);
  }

  public get todos() : TodosDataType[] {
    return this._todos;
  }

  public set searchText(text: string) {
    this._searchText = text;
    this.searchSubject$.next(text);
  }

  public remove(index: number): void {
    this._todos = this._todos.filter((item: TodosDataType, i: number) => i != index);
    this.todosSubject$.next(this._todos);
  }
}

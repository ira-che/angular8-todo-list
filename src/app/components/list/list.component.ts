import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingsService } from '../../common/services/settings.service';
import { TodosDataType } from '../../common/interfaces/todos.data.interface';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public todos: TodosDataType[];
  public searchText: string;

  constructor(
    private settingsService: SettingsService
  ) {
  }

  public ngOnInit() : void {
    this.todos = this.settingsService.todos;
    this.settingsService.searchSubject$
      .subscribe(
        (text: string) => { this.searchText = text; }
      );
  }

  public remove(index: number) : void {
    this.settingsService.remove(index);
  }

  public onChange() : void {
    this.settingsService.todos = this.todos;
  }
}


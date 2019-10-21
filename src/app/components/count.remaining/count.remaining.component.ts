import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../common/services/settings.service'
import { TodosDataType } from '../../common/interfaces/todos.data.interface';

@Component({
  selector: 'count',
  template: `<p id="remainings">{{count}} remaining(s)</p>`,
  styles: [`
    #remainings {
      margin-bottom: 2em;
    }
  `]
})

export class CountRemainingComponent implements OnInit {
  public count: number; 
  
  constructor(
    private settingsService : SettingsService
  ) {    
  }

  public ngOnInit(): void {
    this.count = this.getCount();
    this.settingsService.todosSubject$
      .subscribe((todos : TodosDataType[]) => {
        this.count = this.getCount();
      });
  }

  private getCount = () : number => {
    return this.settingsService.todos.filter((todo: TodosDataType)=> todo.done == false).length;
  };
}

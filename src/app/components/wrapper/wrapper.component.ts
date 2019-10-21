import { Component, Input } from '@angular/core';
import { SettingsService } from '../../common/services/settings.service'
import { TodosDataType } from '../../common/interfaces/todos.data.interface';

@Component({
  selector: 'wrapper',
  templateUrl: 'wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})

export class WrapperComponent  {
  public name: string;
  public searchResults: TodosDataType[]; 
  
  constructor(
  ) {
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { TodosDataType } from '../interfaces/todos.interface';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(todos: TodosDataType[], searchText: string): TodosDataType[] {
    if( !todos || !searchText ) {
      return todos;
    }
    return todos.filter( 
      ( item : TodosDataType ) => {
        return item.text.toLowerCase().includes(searchText.toLowerCase());
      }
    );
  }
}

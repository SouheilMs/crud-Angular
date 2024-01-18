import { Component, Input } from '@angular/core';
import { Todo } from '../model/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {
  
  @Input() todosInput: Todo[] = []

}

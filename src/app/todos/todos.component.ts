import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {
  
  @Input() todosInput: Todo[] = []
  @Output() removeEventFromTodo: EventEmitter<number> = new EventEmitter<number>

  sendIdToApp(data: any){
    this.removeEventFromTodo.emit(data);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() removeEvent: EventEmitter<number>= new EventEmitter<number>();
  
  onClick(){
    this.removeEvent.emit(this.todo.id)
  }
}

import { Component, EventEmitter , Output } from '@angular/core';
import { TodoBody } from '../model/todobody';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  todo: TodoBody = {
    todo:"",
    completed:false,
    userId:55
  };
  @Output() addEvent : EventEmitter<TodoBody> = new EventEmitter<TodoBody>();

  onClick(){
    console.log(this.todo)
    this.addEvent.emit(this.todo)
  } 
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from './model/todos';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: Todo[] = []
  constructor(private service: ServiceService){}
  ngOnInit(): void {
    
    this.service.getAllTodos().subscribe((res: any)=>{
      this.data = res.todos
    })
  }

  deleteTodo(data: any){
    console.log(this.data)
    this.data.pop()
    console.log(this.data)
  }
}

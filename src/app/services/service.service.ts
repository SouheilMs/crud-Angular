import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from '../model/todos';
import { TodoBody } from '../model/todobody';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  url: string = "https://dummyjson.com/todos/"
  constructor(private http: HttpClient) { }

  getAllTodos(){
    return this.http.get(this.url + "?limit=10");
  }

  getTodoById(id: string){
    return this.http.get(this.url + id )
  }

  addTodo(todo: TodoBody){
    return this.http.post(this.url + "add", todo);
  }

  deleteTodo(id: string){
    return this.http.delete(this.url + id)
  }
}

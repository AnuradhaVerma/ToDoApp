import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: string[]=[];
  

  constructor(private todoService : TodoService){
    this.todos=this.todoService.getTodos();
  }

  deleteTodo(index:number):void{
    this.todoService.deleteTodo(index);
    this.todos=this.todoService.getTodos();
  }
}

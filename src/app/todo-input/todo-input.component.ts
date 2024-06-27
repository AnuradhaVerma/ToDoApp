import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  newTodo:string='';

  constructor(private todoService:TodoService){}

  addTodo():void{
    if(this.newTodo.trim() !== ''){
      this.todoService.addTodo(this.newTodo);
      this.newTodo='';
    }
  }

}

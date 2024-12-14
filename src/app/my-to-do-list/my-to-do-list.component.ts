import { Component } from '@angular/core';

@Component({
  selector: 'app-my-to-do-list',
  templateUrl: './my-to-do-list.component.html',
  styleUrls: ['./my-to-do-list.component.css']
})
export class MyToDoListComponent {

  todos: string[] = [];
  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo);
      this.newTodo = ''; 
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;
  operation = 'view';

  constructor() {}

  ngOnInit(): void {
    this.todo = new Todo('1', 'Buy 🥛', '2 litres', false, new Date());
  }
}

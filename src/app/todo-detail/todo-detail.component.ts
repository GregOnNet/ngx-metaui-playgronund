import {Component, OnInit} from '@angular/core';
import {Todo} from '../model/todo' ;



@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

  object: Todo;
  operation = 'view';

  constructor() {
  }

  ngOnInit(): void {

    this.object = new Todo('R0001', 'Frank Kolar',
    'This is my user record', new Date());
  }
}


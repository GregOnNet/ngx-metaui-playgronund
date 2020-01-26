import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-urgent',
  template: `
    <span class="w-string-field">{{ urgency }}</span>
  `
})
export class TodoUrgentComponent implements OnInit {
  @Input() priority: number;

  urgency: '🤷‍♂️' | '🌈';

  constructor() {}

  ngOnInit() {
    this.urgency = this.priority > 50 ? '🤷‍♂️' : '🌈';
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoUrgentComponent } from './todo-urgent.component';

describe('TodoUrgentComponent', () => {
  let component: TodoUrgentComponent;
  let fixture: ComponentFixture<TodoUrgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoUrgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

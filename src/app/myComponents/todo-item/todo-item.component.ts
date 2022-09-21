import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from 'src/app/Todo'; 

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo: Todo;
@Output() todoDelete: EventEmitter<Todo>=new EventEmitter(); 
@Output() todoCheckBox: EventEmitter<Todo>=new EventEmitter(); 
constructor() { }

  onClick(todo:Todo){
    
    console.log("Button Clicked !");
    this.todoDelete.emit(todo);
  }
  ngOnInit(): void {
  }
  onCheckBoxClick(todo:Todo){
  this.todoCheckBox.emit(this.todo);
  }
}

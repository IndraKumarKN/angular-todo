import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

	@Input()
	public todo: Todo;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

public removeItem(): void {

	this.todoService.removeTodo(this.todo.id);
}

}

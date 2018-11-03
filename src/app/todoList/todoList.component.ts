import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tasks } from '../Models/tasks';
import { ToDoListService } from '../services/toDoList.service';
import { Subscription } from 'rxjs';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.sass']
})
export class TodoListComponent implements OnInit, OnDestroy {

  tasksToDo: Tasks[];
  tasksInProgress: Tasks[];
  tasksDone: Tasks[];
  tasksSubscription: Subscription;

  constructor(private todoListService: ToDoListService) { }

  ngOnInit() {
    this.tasksSubscription = this.todoListService.tasksSubject.subscribe((tasks) => {
      this.tasksToDo = tasks[0];
      this.tasksInProgress = tasks[1];
      this.tasksDone = tasks[2];
    });

    this.todoListService.emitTasksSubject();
  }

  onDrop(event: CdkDragDrop<String[]>) {
    this.todoListService.onDropTask(event);
  }

  ngOnDestroy(): void {
    this.tasksSubscription.unsubscribe();
  }
}

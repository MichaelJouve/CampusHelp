import { Injectable } from '@angular/core';
import { Tasks, Status } from '../Models/tasks';
import { Subject } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  // [0] = toDo, [1] = inProgress, [2] = Done
  private tasks: Tasks[][] = [
    [
      {
        id: 1,
        title: 'TODO 1',
        content: 'Faire bouger les taches sur dans la même liste',
        status: Status.toDo,
      },
      {
        id: 2,
        title: 'Second task todo',
        content: 'Démarrer à coder la function',
        status: Status.toDo,
      },
      {
        id: 3,
        title: 'Third task todo',
        content: 'Toto a plus d\'inspi',
        status: Status.toDo,
      }
    ],
    [
      {
        id: 4,
        title: 'EN COURS 1',
        content: 'Faire bouger les taches sur dans la même liste',
        status: Status.inProgress,
      },
      {
        id: 5,
        title: 'Second task',
        content: 'Démarrer à coder la function',
        status: Status.inProgress,
      },
      {
        id: 6,
        title: 'Third task',
        content: 'Toto a plus d\'inspi',
        status: Status.inProgress,
      }
    ],
    [
      {
        id: 7,
        title: 'First task',
        content: 'Faire bouger les taches sur dans la même liste',
        status: Status.done,
      },
      {
        id: 8,
        title: 'Second task',
        content: 'Démarrer à coder la function',
        status: Status.done,
      },
      {
        id: 9,
        title: 'Third task',
        content: 'Toto a plus d\'inspi',
        status: Status.done,
      }
    ]
  ];

  tasksSubject = new Subject<Tasks[][]>();

  constructor() { }

  emitTasksSubject(): any {
    this.tasksSubject.next(this.tasks.slice());
  }

  onDropTask(event: CdkDragDrop<String[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
        // if I found the first index I will be able to change the status. but I didn't find it so far. the second one is event.currentIndex
    }
    this.emitTasksSubject();
  }
}

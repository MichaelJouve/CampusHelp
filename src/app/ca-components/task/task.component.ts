import { Component, OnInit, Input } from '@angular/core';
import { Tasks } from '../../Models/tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {

  @Input() tasksData: Tasks[];

  constructor() { }

  ngOnInit() {
  }

}

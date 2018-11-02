import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Studient } from '../../Models/studient';

@Component({
  selector: 'app-studients-tab',
  templateUrl: './studients-tab.component.html',
  styleUrls: ['./studients-tab.component.sass']
})
export class StudientsTabComponent {

  @Input() studientsData: Studient[];
  @Output() deleteStud = new EventEmitter();

  constructor() { }

  deleteStudient(studientId) {
    this.deleteStud.emit(studientId);
  }

}

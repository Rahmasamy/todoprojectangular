
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-bodychild',
  standalone: true,
  imports:[NgFor],
  templateUrl: './bodychild.component.html',
  styleUrls: ['./bodychild.component.css']
})
export class BodychildComponent {
  @Input() tasks: string[] = [];
  @Output() taskDeleted = new EventEmitter<number>();

  deleteTask(index: number) {
    this.taskDeleted.emit(index);
  }
}


import { Component } from '@angular/core';
import { BodychildComponent } from '../bodychild/bodychild.component';
import { HeaderchildComponent } from '../headerchild/headerchild.component';

@Component({
  selector: 'app-todo-parent',
  templateUrl: './todo-parent.component.html',
  styleUrls: ['./todo-parent.component.css'],
  standalone: true,
  imports: [BodychildComponent, HeaderchildComponent]
})
export class TodoParentComponent {
  tasks: string[] = [];

  onTaskAdded(task: string) {
    this.tasks.push(task);
  }

  onTaskDeleted(index: number) {
    this.tasks.splice(index, 1);
  }
}

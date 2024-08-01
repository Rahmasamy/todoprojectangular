import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-headerchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './headerchild.component.html',
  styleUrls: ['./headerchild.component.css']
})
export class HeaderchildComponent {
  task: string = '';
  
  @Output() taskAdded = new EventEmitter<string>();

  addTask() {
    if (this.task.trim()) {
      this.taskAdded.emit(this.task);
      this.task = '';
    }
  }
}

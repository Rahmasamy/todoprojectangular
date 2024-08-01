import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodychildComponent } from './bodychild/bodychild.component';
import { TodoParentComponent } from './todo-parent/todo-parent.component';
import { HeaderchildComponent } from './headerchild/headerchild.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BodychildComponent,HeaderchildComponent,TodoParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoproject';
}

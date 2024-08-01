import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderchildComponent } from './headerchild/headerchild.component';
import { BodychildComponent } from './bodychild/bodychild.component';
import { TodoParentComponent } from './todo-parent/todo-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderchildComponent,
    BodychildComponent,
    TodoParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

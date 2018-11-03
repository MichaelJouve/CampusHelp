import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { MenuComponent } from './menu/menu.component';
import { CampusService } from './services/campus.service';
import { HomeComponent } from './home/home.component';
import { StudientsTabComponent } from './ca-components/studients-tab/studients-tab.component';
import { TodoListComponent } from './todoList/todoList.component';
import { ToDoListService } from './services/toDoList.service';
import { StudientComponent } from './studient/studient.component';
import { TaskComponent } from './ca-components/task/Task.Component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    MenuComponent,
    HomeComponent,
    StudientComponent,
    StudientsTabComponent,
    TodoListComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [CampusService, ToDoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

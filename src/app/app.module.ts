import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { MenuComponent } from './menu/menu.component';
import { CampusService } from './services/campus.service';
import { HomeComponent } from './home/home.component';
import { StudientComponent } from './studient/studient.component';
import { StudientsTabComponent } from './ca-components/studients-tab/studients-tab.component';
import { TaskComponent } from './task/task.component';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    MenuComponent,
    HomeComponent,
    StudientComponent,
    StudientsTabComponent,
    TaskComponent,
    TasksViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CampusService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

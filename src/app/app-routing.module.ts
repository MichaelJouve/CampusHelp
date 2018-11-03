import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { StudientComponent } from './studient/studient.component';
import { TodoListComponent } from './todoList/todoList.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'group', component: GroupComponent },
  { path: 'studient', component: StudientComponent },
  { path: 'todoList', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

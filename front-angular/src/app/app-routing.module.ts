import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';

const routes: Routes = [
  { path: 'task/list', component: TasksListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/tasks.service'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  public tasks: []

  constructor(private _TaskService: TaskService) { }

  ngOnInit() {
    this.tasksList()
  }

  tasksList() {
    this._TaskService.list().subscribe(
      (data: any) => this.tasks = data
    )
  }

}

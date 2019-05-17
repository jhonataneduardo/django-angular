import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl = 'http://localhost:8000/api/task'

  constructor( private http: HttpClient ) { }

  list(): Observable<any> {
    return this.http.get<any>(this.taskUrl + '/list/')
  }

}

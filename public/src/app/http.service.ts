import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){
   //   this.getTasks();
   }
   getTasks(){
   // our http response is an Observable, store it in a variable
      return this._http.get('/cake');
   // subscribe to the Observable and provide the code we would like to do with our data from the response
      
   }
   getTask(task_id){
      console.log('ID is', task_id);
      console.log(task_id);
      // let tempObservable = this._http.get('/tasks/5a84f4c3d7dee2b8012d96ae');
      // tempObservable.subscribe(data => console.log("Got the task!", data));
      return this._http.get('/cake/'+task_id);
    }
    Delete(id){
      return this._http.delete('/cake/'+id);
    }
    AddComment(comment,id){
      return this._http.post('/newComment/'+id,comment);
    }
    addTask(newtask){
      return this._http.post('/cake', newtask);
    }
    editTask(editTask){
      console.log('request to edit', editTask._id);
      return this._http.patch('/cake/'+editTask._id, editTask);
    }
  }

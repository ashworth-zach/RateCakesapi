import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks = {};
  task = {};
  id = '';
  newCake: any;
  editTask = [];
  newComment:any;
  showEditForm = false;
  self = this;
  constructor(private _httpService: HttpService) { }
  ngOnInit(){
    this.newCake = { name:"",url: "", stars: 0 }
    this.newComment={content:'' }
    this.tasksOnClick();

  }
  postComment(id){
    let observable = this._httpService.AddComment(this.newComment,id);
    observable.subscribe(data => {
      this.newComment={content:'' }
      this.tasksOnClick();
    })
  }
  showOne(id: String) {
    // get one planet
    this._httpService.getTask(id).subscribe(response =>{
      console.log(response);
      this.task = response;
    })
    // set the planet to the child component using Inputs
  }
  tasksOnClick() {
    this._httpService.getTasks().subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data;
      console.log("Got our tasks!", this.tasks)
    })
  }
  taskOnClick(event: any){
    this.task = [];
    this.id = event.target.value;
    let observable = this._httpService.getTask(this.id)
    observable.subscribe(data => {
      console.log("Clicked the button!", this.id)
      this.task = data;
      console.log("Got our task!", this.task)
    })
  }
  onDelete(id){
    let observable = this._httpService.Delete(id);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.tasksOnClick();
    })
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newCake);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newCake = {name: "", url: "",stars:0}
      this.tasksOnClick();
    })
  }
  editOnClick(task){
    console.log("Task we need to edit", task._id);
      console.log("Task to edit", task, "Task title", task.title);
      task.showEditForm = true;
  }
  onEdit(editTask){
    editTask.showEditForm = false;
    console.log("Edit the task", editTask._id)
    let observable = this._httpService.editTask(editTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
    })
  }
}

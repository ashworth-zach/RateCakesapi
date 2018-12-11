import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() showOne: any;

  constructor() { }

  ngOnInit() {
    console.log('in showone component', this.showOne);
  }

}
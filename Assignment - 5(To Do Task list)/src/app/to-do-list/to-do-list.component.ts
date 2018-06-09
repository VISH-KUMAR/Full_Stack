import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  tasks = [];

  taskName:string='';
  status:boolean=false;
  priority:string='';
  completedTask:number = 0;
  date = new Date();

  name:string='task';
  proty:string='high';
  count=0;
  mode:boolean=true;
  selectedTask;

  addToList(){
   // if(this.name != ''){
       this.tasks.push({taskName:this.name ,status:this.status ,priority:this.proty,date:this.date});

    this.name='';
    this.priority='';
  }
  toggleTask(index){
    this.tasks[index].status = !this.tasks[index].status;
    if(this.tasks[index].status)
      this.count++;
    else
      this.count--;
  }
  deleteTask(index){
    this.tasks.splice(index,1);
  }
  editTask(index){
    this.selectedTask=index;
    this.name = this.tasks[index].taskName;
    this.proty = this.tasks[index].priority;
    this.mode=false;
    event.stopPropagation();
  }
  updateTask(){
    this.tasks[this.selectedTask].taskName=this.name;
    this.tasks[this.selectedTask].priority=this.proty;
    this.mode=true;
  }
  constructor() {
  }
  ngOnInit() {
  }
}

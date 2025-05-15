import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
  // name: string = '';
  // ======TODO APP=====
  task:string = '';
  tasklist: {id:number,task:string}[] = [];

  addTask() {
  const inpTask=this.task;
  this.tasklist.push({id:this.tasklist.length+1,task:inpTask});
  this.task = '';
  console.log(inpTask);
  }
deleteTask(id:number) {
  this.tasklist = this.tasklist.filter((task) => task.id !== id);
  console.log(id);
  }
   editTask(id:number) {
   
  const taskToBeUpdated = this.tasklist.find((task) => task.id === id);
  if(taskToBeUpdated){
   
    taskToBeUpdated.task=this.task;
  }
   }

}

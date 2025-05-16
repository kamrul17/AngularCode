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
  // task:string = '';
//   tasklist: {id:number,task:string}[] = [];

//   addTask() {
//   const inpTask=this.task;
//   this.tasklist.push({id:this.tasklist.length+1,task:inpTask});
//   this.task = '';
//   console.log(inpTask);
//   }
// deleteTask(id:number) {
//   this.tasklist = this.tasklist.filter((task) => task.id !== id);
//   console.log(id);
//   }
//    editTask(id:number) {
   
//   const taskToBeUpdated = this.tasklist.find((task) => task.id === id);
//   if(taskToBeUpdated){
   
//     taskToBeUpdated.task=this.task;
//   }
//    }
// =====================
 task: string = '';
  tasklist: { id: number; task: string }[] = [];
  editingId: number | null = null;

  addOrUpdateTask() {
    const trimmedTask = this.task.trim();
    if (!trimmedTask) return;

    if (this.editingId !== null) {
      // Update task
      const taskToEdit = this.tasklist.find(t => t.id === this.editingId);
      if (taskToEdit) {
        taskToEdit.task = trimmedTask;
      }
      this.editingId = null;
    } else {
      // Add new task
      this.tasklist.push({ id: this.tasklist.length + 1, task: trimmedTask });
    }

    this.task = '';
  }

  editTask(id: number) {
    const taskToEdit = this.tasklist.find(t => t.id === id);
    if (taskToEdit) {
      this.task = taskToEdit.task;
      this.editingId = id;
    }
  }

  deleteTask(id: number) {
    this.tasklist = this.tasklist.filter(t => t.id !== id);
    if (this.editingId === id) {
      this.editingId = null;
      this.task = '';
    }
  }


}

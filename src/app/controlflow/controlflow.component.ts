import { Component } from '@angular/core';

@Component({
  selector: 'controlflow',
  standalone: true,
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {
// display: number = 100;
// displayColor: string = 'white';

// handleDefaultBtn(colorValue:number) {
//   this.display = colorValue;
//   console.log(this.display);
// }
// handleInputBtn(colorValue:string) {
//   this.displayColor = colorValue;
//   console.log(this.displayColor);
// }
 users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 }
  ];
  employee = [
  { id: 1, name: 'Alice', age: 25, role: 'Developer' },
  { id: 2, name: 'Bob', age: 30, role: 'Designer' },
  { id: 3, name: 'Charlie', age: 28, role: 'Tester' },
  { id: 4, name: 'Diana', age: 32, role: 'Project Manager' }
];


}

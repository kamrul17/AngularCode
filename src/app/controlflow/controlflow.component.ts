import { Component } from '@angular/core';

@Component({
  selector: 'controlflow',
  standalone: true,
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {
display: number = 100;
displayColor: string = 'white';

handleDefaultBtn(colorValue:number) {
  this.display = colorValue;
  console.log(this.display);
}
handleInputBtn(colorValue:string) {
  this.displayColor = colorValue;
  console.log(this.displayColor);
}
}

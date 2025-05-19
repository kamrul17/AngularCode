import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-style',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-style.component.html',
  styleUrl: './dynamic-style.component.css'
})
export class DynamicStyleComponent {
  
  
bgColor="green";
changeTheme(){
  this.bgColor = this.bgColor === "green" ? "red" : "blue";
}  

}

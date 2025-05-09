import { Component } from '@angular/core';

@Component({
  selector: 'loginPage',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name:string|number="100"
  handleClick(){
    this.name="10";
    console.log(`btn clicked${this.name}`);
    
  }

}

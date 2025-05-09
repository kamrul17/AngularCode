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
  handleClick(event:Event){
    // this.name="10";
    console.log(`btn clicked`);
    // console.log((event.target as HTMLInputElement).value);
    
  }
  handleInput(event:Event){

    console.log((event.target as HTMLInputElement).value);
    
  }
  onChange(e:Event){

    console.log((e.target as HTMLSelectElement).value);
    
  }

}

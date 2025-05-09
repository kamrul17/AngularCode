import { Component } from '@angular/core';

@Component({
  selector: 'getandsetvalue',
  standalone: true,
  imports: [],
  templateUrl: './get-and-setvalue.component.html',
  styleUrl: './get-and-setvalue.component.css'
})
export class GetAndSetvalueComponent {
  name:string="";
  displayName:string="";
  displayEmail:string="";
 
  handleOnInput(e:Event){
    const value=(e.target as HTMLInputElement).value;
    this.name=value;
  }

  getName(){
    this.displayName=this.name;
  }

  getEmail(email:string){
  
    
  this.displayEmail=email;
  console.log(this.displayEmail);
}
}

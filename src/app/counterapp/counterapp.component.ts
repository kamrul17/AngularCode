import { Component } from '@angular/core';

@Component({
  selector: 'counterapp',
  standalone: true,
  imports: [],
  templateUrl: './counterapp.component.html',
  styleUrl: './counterapp.component.css'
})
export class CounterappComponent {
  counter:number=0;
  handleIncrement(){
    this.counter+=1;
  }
  handleDecrement(){
    this.counter-=1;
  }
  handleReset(){
    this.counter=0;
  }

}

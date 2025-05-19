import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'directive-exm',
  standalone: true,
  imports: [NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directive-exm.component.html',
  styleUrl: './directive-exm.component.css'
})
export class DirectiveExmComponent {
// show=false;
color="sky"
// showBtn(){
//   this.show=!this.show
// }
}

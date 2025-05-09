import {Component} from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { SignupComponent } from "../signup/signup.component";
// custom component
@Component({
    selector:'profilePage',
     templateUrl:'./profile.component.html',
     standalone:true,
     styleUrl:'./profile.component.css',
     imports: [LoginComponent, SignupComponent]
   
})

export class ProfileComponent{

}
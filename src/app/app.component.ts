import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {ProfileComponent} from './profile/profile.component'
import { CounterappComponent } from './counterapp/counterapp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,SignupComponent,ProfileComponent,CounterappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angularApp';
  desc = 'will become pro soon'
user1='abc'
user2='Abc'
}

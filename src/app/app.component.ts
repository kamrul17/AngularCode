import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component'
import {SignupComponent} from './signup/signup.component'
import {ProfileComponent} from './profile/profile.component'
import { CounterappComponent } from './counterapp/counterapp.component';
import { GetAndSetvalueComponent } from './get-and-setvalue/get-and-setvalue.component';
import { CssstyleComponent } from './cssstyle/cssstyle.component';
import { ControlflowComponent } from './controlflow/controlflow.component';
import { SignalComponent } from './signal/signal.component';
import { ForLoopContextualVariableComponent } from './for-loop-contextual-variable/for-loop-contextual-variable.component';
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { DirectiveExmComponent } from './directive-exm/directive-exm.component';
import { HighlightDirective } from './highlight.directive';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, SignupComponent, ProfileComponent, CounterappComponent, GetAndSetvalueComponent, CssstyleComponent, ControlflowComponent, SignalComponent, ForLoopContextualVariableComponent, TwoWayBindingComponent,TwoWayBindingComponent,DynamicStyleComponent,DirectiveExmComponent,HighlightDirective,RouterLink,RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angularApp';
  desc = 'will become pro soon'
user1='abc'
user2='Abc'
}

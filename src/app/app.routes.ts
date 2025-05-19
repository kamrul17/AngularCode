import { Routes } from '@angular/router';
import { AboutComponent } from './routing/about/about.component';
import { ContactComponent } from './routing/contact/contact.component';
import { RoutingLoginComponent } from './routing/login/login.component';
import { HomeComponent } from './routing/home/home.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'routing/about', component:AboutComponent},
    {path:'routing/contact', component:ContactComponent},
    {path:'routing/login', component:RoutingLoginComponent},
    {path:'routing/home', component:HomeComponent},
    {path:'**', component:PageNotFoundComponent},
];

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { DoctorsComponent } from './components/doctors/doctors.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:LayoutsComponent,
        canActivateChild:[()=>inject(AuthService).isAuthenticated()],
      children:[
        {
            path:"",
            component:HomeComponent
        },
        {
            path:"doctors",
            component:DoctorsComponent
        }
      ]
    },
    {
        path:"**",
        component:NotFoundComponent
    }
];

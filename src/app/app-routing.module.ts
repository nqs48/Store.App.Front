import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import {HomeComponent} from './Modules/Pages/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

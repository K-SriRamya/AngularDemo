import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { ShowempComponent } from './showemp/showemp.component';


const routes: Routes = [
  {
  path: 'app-showemp',
  component : ShowempComponent
  },
  {
    path : 'app-addemp',
    component : AddempComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

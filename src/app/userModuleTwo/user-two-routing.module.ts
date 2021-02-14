import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';


const routes: Routes = [

  {
    path: '',
    component: UserComponentComponent
   
  }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTwoRoutingModule { }

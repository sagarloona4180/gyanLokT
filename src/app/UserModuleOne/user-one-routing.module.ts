import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';
import { AgGridModule } from 'ag-grid-angular';

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
export class UserOneRoutingModule { }

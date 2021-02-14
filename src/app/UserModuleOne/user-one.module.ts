import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOneRoutingModule } from './user-one-routing.module';

import { UserComponentComponent } from './user-component/user-component.component';
import { AgGridModule } from 'ag-grid-angular';





@NgModule({
  declarations: [UserComponentComponent],
  imports: [
    CommonModule,
    UserOneRoutingModule,
    
    AgGridModule.withComponents([])
  ]
  
})
export class UserOneModule { }

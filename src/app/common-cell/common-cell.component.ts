import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-common-cell',
  templateUrl: './common-cell.component.html',
  styleUrls: ['./common-cell.component.scss'],
  
  providers:[DatePipe]
})
export class CommonCellComponent implements ICellRendererAngularComp {


value ='';
  agInit(params:any){

     console.log(params);
     this.value = params.value;

  }


  refresh(){
    return false;
  }
  
}

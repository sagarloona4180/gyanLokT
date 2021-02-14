import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {


  public gridOptions: GridOptions = {};
  constructor() {

    this.gridOptions.rowHeight = 40;
    this.gridOptions.columnDefs = [{
      headerName: 'Column 1',
      field: 'column1',
      width:250,
      checkboxSelection :true,
      headerCheckboxSelection:true


    },
    {
      headerName: 'Column 2',
      field: 'column2',
      width:250
    },
    {
      headerName: 'Column 3',
      field: 'column3',
      width:500
    }];


    this.gridOptions.rowData= [{
      column1:'Test1',
      column2:'Test2',
      column3:'Test3'
    },
    {
      column1:'Test1',
      column2:'Test2',
      column3:'Test3'
    },
    {
      column1:'Test1',
      column2:'Test2',
      column3:'Test3'
    },
    {
      column1:'Test1',
      column2:'Test2',
      column3:'Test3'
    },
    {
      column1:'Test1',
      column2:'Test2',
      column3:'Test3'
    },
    {
      column1:'Test1',
      column2:'Test2',
      column3:'Test3'
    }];

    this.gridOptions.rowSelection='multiple';
  }




  onRowSelection(jjkcjxjcjxckxhjk:any){
     console.log(jjkcjxjcjxckxhjk);

   console.log( this.gridOptions.api?.getSelectedRows());
  }
  ngOnInit(): void {
  }

}

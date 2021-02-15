import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { CommonCellComponent } from 'src/app/common-cell/common-cell.component';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {


  public gridOptions: GridOptions = {};
  constructor(private $httpClient: HttpClient) {

    this.gridOptions.rowHeight = 40;
    this.gridOptions.columnDefs =
      [{
        headerName: 'Column 1',
        field: 'column1',
        checkboxSelection: true,
        headerCheckboxSelection: true
     


      },
      {
        headerName: 'Column 2',
        field: 'column2',
    

      },
      {
        headerName: 'Column 3',
        field: 'column3',
      

      }];

    this.gridOptions.defaultColDef={
      width: 250,
      suppressMovable:true,
      resizable:true,
      // editable :true,
      cellRendererFramework : CommonCellComponent
    }


    this.gridOptions.rowData = [];

    this.gridOptions.rowSelection = 'multiple';
  }





  onRowSelection(jjkcjxjcjxckxhjk: any) {
    console.log(jjkcjxjcjxckxhjk);

    console.log(this.gridOptions.api?.getSelectedRows());
  }
  ngOnInit(): void {

    //to get data from gridOption api dyanmically
    this.$httpClient.get('assets/data.json').subscribe((x: any) => {


      if (this.gridOptions && this.gridOptions.api) {
        this.gridOptions.api.setRowData(x.Items);
      } else {
        this.gridOptions.rowData = x.Items; //one time 
      }

    })
  }

}

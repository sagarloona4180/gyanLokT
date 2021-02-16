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
        headerCheckboxSelection: true,
        colId:'column1'
     


      },
      {
        headerName: 'Column 2',
        field: 'column2',
        colId:'column2'    

      },
      {
        headerName: 'Column 3',
        field: 'column3',
        colId:'column3'
      

      }];

    this.gridOptions.defaultColDef={
      width: 250,
      suppressMovable:true,
      resizable:true,
       editable :true,
       cellRendererFramework:CommonCellComponent
    }


    this.gridOptions.rowData = [];

    this.gridOptions.rowSelection = 'multiple';
    // this.gridOptions.singleClickEdit=true;

    this.gridOptions.suppressClickEdit = true;
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




  edit(){
    this.gridOptions.api?.startEditingCell({
      rowIndex: 1,
      colKey: 'column1'
    })
      
    
  }

  stop(){  

   console.log( this.gridOptions.api?.getDisplayedRowAtIndex(1));
    this.gridOptions.api?.stopEditing();
  }

  onCellValueChanged(e:any){
    console.log(e);
  }

  save(){
    const rowData:any = [];
    this.gridOptions.api?.forEachNode(node => rowData.push(node.data));
    console.log(rowData);
  }

  convert(v:string){

  //  const  datevalue = '0001-01-01T00:00:00';
  //   this.date.transform(datevalue, 'dd-mm-yy');
  //   console.log(   this.date.transform(datevalue, 'dd-mm-yy hh:mm:ss'));
  }
}

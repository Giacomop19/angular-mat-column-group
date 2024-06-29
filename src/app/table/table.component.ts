import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

const DATA = [{ id : '1', name : 'Jack', age : '23', nationality : 'italy', height : '1.80', weight : '85', note : 'sup!'},
              { id : '2', name : 'Luke', age : '17', nationality : 'italy', height : '1.85', weight : '72', note : 'dawg!'},
              { id : '3', name : 'Dave', age : '22', nationality : 'italy', height : '1.90', weight : '81', note : 'hawk tuah!'}]
@Component({
   selector: 'app-table',
   templateUrl: './table.component.html',
   styleUrls : ['./table.component.css']
})

export class TableComponent implements OnInit, AfterViewInit {

   // DATA TABLE
   data ?: any | undefined
   dataSource : any | null
   tableHeader = ['id', 'name','age','nationality','height','weight','note']
   headerRow = ['headerRow1','headerRow2','headerRow3']

   // LOCAL USEFUL VARIABLES

   // HTML ELEMENTS

   constructor( ) {}

   ngOnInit() {
      this.dataSource = DATA
      this.data = `Your data is ${"\n"} ${this.dataSource[0].id} ${this.dataSource[0].name} ${this.dataSource[0].age} ${this.dataSource[0].nationality} ${this.dataSource[0].height} ${this.dataSource[0].weight} ${this.dataSource[0].note} ${"\n"} ${this.dataSource[1].id} ${this.dataSource[1].name} ${this.dataSource[1].age} ${this.dataSource[1].nationality} ${this.dataSource[1].height} ${this.dataSource[1].weight} ${this.dataSource[1].note} ${"\n"} ${this.dataSource[2].id} ${this.dataSource[2].name} ${this.dataSource[2].age} ${this.dataSource[2].nationality} ${this.dataSource[2].height} ${this.dataSource[2].weight} ${this.dataSource[2].note}`

      this.retreiveDataFromServer().then(
         res => this.retreiveData().then(
            res=> this.retreiveDataIfEmpty()
         )
      )
   }

   ngAfterViewInit(): void {
   }

   // get data from server db
   retreiveDataFromServer = () => {
      return new Promise<void>((resolve) => {
         resolve()
      })
   }

   // get data from main db
   retreiveData = () => {
      return new Promise<void>((resolve) => {
        resolve()
      })
   }

   // service in case data from DB -> empty
   retreiveDataIfEmpty = () => {
      this.dataSource = this.dataSource || this.data
   }

   // function that updates dataSource each time input table changes
   updateRow = (i: number, e: any) => {
      this.dataSource[i] = {...e}
      console.log(i,this.dataSource)
   }

   // checks whether input should be readonly or not based on mayor age > 18
   inputIsReadOnly(age:any){
      let bool = age <= 18 ? true : false
      return bool
   }

   /* function takes in data edited from table via ngModel
    * save data 
    */ 
   save = () => {
      alert(this.data)
      
   }


   
}
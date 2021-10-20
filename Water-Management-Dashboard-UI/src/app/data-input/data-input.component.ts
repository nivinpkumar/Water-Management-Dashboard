import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import {DatainputService} from './datainput.service';
import {DashboardData} from './dashboarddata';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {

  newData :DashboardData;
  dataform = this.fb.group({
    year: ['',Validators.required],
    consumptionrate: ['', Validators.required],
    phvalue: ['', Validators.required]
  });
  display=true;

  constructor(private fb: FormBuilder,private service: DatainputService) {
    this.service.getData().subscribe((res:any[])=>{
      this.display=false;
    })
   }

  ngOnInit() {

  }

  addData(){
    this.dataform.get('consumptionrate').setValue(parseInt(this.dataform.get('consumptionrate').value));
    this.dataform.get('phvalue').setValue(parseInt(this.dataform.get('phvalue').value));
    const newData ={
      year:this.dataform.get('year').value,
      consumption_rate:this.dataform.get('consumptionrate').value,
      ph_value:this.dataform.get('phvalue').value
    }

    this.service.addnewdata(newData).subscribe(data=>{
      console.log(data);
     if(data['msg']!="Data added succesfully"){
      this.display=true;
     }
    })
  }

  onSubmit(){
    this.addData();
  }
}


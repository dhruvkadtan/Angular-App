import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { employee } from '../employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import employees from "../employees.json"
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  title:string = "Edit Employee"
  lc : any[] = ["Bangalore","Chennai","Pune","Hyderabad"]
  oldLocation : any;
  formGrp : FormGroup;
  constructor(private titleService:Title, private formBuilder:FormBuilder,private loc:Location) {

    this.formGrp = formBuilder.group({
      mobctrl: ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      emailctrl: ['',[Validators.required,Validators.pattern("[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})")]],
      namectrl: ['',[Validators.required,Validators.pattern("(.*[(a-z)(A-Z)]){3}")]]
    }) 
   }

   get mobno() {
    return this.formGrp.controls;
  }

  emp : employee = {id : 0,name : "",location:"",email:"",mobile:""}

  selectedLocation: string =''
  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.emp = history.state
    this.selectedLocation = this.emp.location;
    this.oldLocation = this.emp.location;
  }

  onLocationChange(event : any) {
    this.emp.location = event.target.value;
  }
  doSubmit() {
    for(let e of employees) {
      if(e.id == this.emp.id) {
        e.name = this.emp.name;
        if(this.oldLocation != this.emp.location)
            alert("Employee has been moved to different location")          
        e.location = this.emp.location;
        e.email = this.emp.email;
        e.mobile = this.emp.mobile;
      }
    }
    this.loc.back();
  }
  


} 

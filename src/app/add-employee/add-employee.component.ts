import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { employee } from '../employee';
import { FormControl,FormGroup,FormGroupName,Validators,AbstractControl,FormBuilder, NgForm } from '@angular/forms';
import employees from "../employees.json"
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  formGrp : FormGroup;
  mobileNumber : string;
  name : string;
  email : string;
  location : string = 'Bangalore';
  title:string = "Add Employee";
  emp : employee = {id : 0,name : "",location:"",email:"",mobile:""}
  id : number = employees[employees.length -1].id + 1;

  constructor(private titleService:Title ,  formBuilder :  FormBuilder, private locat:Location) { 
    this.mobileNumber = '';
    this.name='';
    this.email='';
    this.formGrp = formBuilder.group({
      mobctrl: ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
      emailctrl: ['',[Validators.required,Validators.pattern("[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})")]],
      namectrl: ['',[Validators.required,Validators.pattern("(.*[(a-z)(A-Z)]){3}")]]
    }) 
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  lc : any[] = ["Bangalore","Chennai","Pune","Hyderabad"]

  get mobno() {
    return this.formGrp.controls;
  }

  onLocationChange(event : any) {
    this.location = event.target.value;
  }
  doSubmit() {
    this.emp.id = this.id;
    this.emp.name = this.name;
    this.emp.location = this.location;
    this.emp.email = this.email;
    this.emp.mobile = this.mobileNumber
    employees.push(this.emp);
    this.locat.back();
  }
}

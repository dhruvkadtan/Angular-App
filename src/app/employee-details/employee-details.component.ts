import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  title:string = "Employee Details";
  constructor(private titleService : Title, private location:Location) { }

  emp : employee = {id : 0,name : "",location:"",email:"",mobile:""}
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.emp = history.state
  }


  goBack():void {
    this.location.back();
  }

 
}

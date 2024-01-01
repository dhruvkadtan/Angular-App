import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';
import employees from '../employees.json'


@Component({
  changeDetection : ChangeDetectionStrategy.OnPush,
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  title:string = "Employee List";

  employees:any  = employees ;
  filterData = {count : 0};
  constructor(private titleService : Title) {
   
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
  
  refreshCount(param1 : number) {
    this.filterData.count = param1;
  }

  nameFilter : string = '';
   
  deleteEmp(id1:number) {   
    let index = employees.findIndex(x => x.id == id1)
    employees.splice(index,1)
    this.filterData = { count : employees.length};
  }
}

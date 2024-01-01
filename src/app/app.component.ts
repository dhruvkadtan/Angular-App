import { Component } from '@angular/core';
import employees from "./employees.json";

@Component({
  selector: 'app-root',
  template: `
  <h1 id="heading">Employee Management System</h1>
  <nav id="homeNav" class="nav-ele">
      <a id="list" [routerLink]="['employees']"  routerLinkActive="active">Employees List</a>
      <a id="addEmp" [routerLink]="['addEmployee']" routerLinkActive="active">Add Employee</a>
  </nav>
<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Management System';
  employees :  any = employees;

  constructor() {

  }
  ngOnInit() {

  }
}

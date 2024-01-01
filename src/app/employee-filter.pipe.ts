import { Pipe, PipeTransform } from '@angular/core';
import { employee } from './employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  constructor(private e : EmployeeListComponent) {}

  transform(param1 : employee[] , param2 : string): employee[] {
    if(!param1) return [];
    if(!param2){ 
      this.e.filterData.count = param1.length;
      return param1;}
    param2 = param2.toLowerCase();
    let filteredData = param1.filter(it => {
      return it.name.toLowerCase().startsWith(param2);
    });
    this.e.filterData.count = filteredData.length;
    return filteredData;
  }
}

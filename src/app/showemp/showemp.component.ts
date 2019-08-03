import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employeeservice.service';

@Component({
  selector: 'app-showemp',
  templateUrl: './showemp.component.html',
  styleUrls: ['./showemp.component.css']
})
export class ShowempComponent implements OnInit {

  employee: EmployeeService;
  dept : Employee[] = [];
  constructor(employee:EmployeeService) {
    this.employee = employee;
   }

  ngOnInit() {
    this.employee.fetchData();
    this.dept = this.employee.getData();
  }
  delete(e){
    let index=this.dept.indexOf(e);
    this.dept.splice(index,1);

  }

}

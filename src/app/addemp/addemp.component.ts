import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employeeservice.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  service : EmployeeService;
  emp: Employee;


  constructor(service : EmployeeService) {
    this.service = service;
   }

  ngOnInit() {
  }

  add(data : any){
    this.emp = new Employee(data.id, data.name);
    this.service.addData(this.emp);
  }

}

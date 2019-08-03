import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  http: HttpClient;
  fetch: boolean = false;
  empl : Employee[] = [];
  constructor(http: HttpClient) {
    this.http = http;
   }

   fetchData(){
     this.http.get('./assets/employee.json').subscribe(
       data =>{
         if(!this.fetch){
           this.convert(data);
           this.fetch = true;
         }
       }
     )
   }
   convert(data: any){
     for(let emp of data){
       let e = new Employee(emp.id,emp.name);
       this.empl.push(e);
     }
   }
   getData(): Employee[]{
    return this.empl;
   }

   addData(e : any){
     this.empl.push(e);
   }
}

export class Employee{
  id: number;
  name: string;
  constructor(id:number,name:string){
    this.id = id;
    this.name = name;
  }
}
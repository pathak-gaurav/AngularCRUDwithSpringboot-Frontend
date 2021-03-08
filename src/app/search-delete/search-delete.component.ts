import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {
  constructor(private employeeService: EmployeeService) { }
  public employees: Employee[];
  public email: string = '';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.employeeService.getEmployee().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(response);
      }, err => {
        console.log(err);
      }
    )
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(response);
      }, err => {
        console.log(err);
      }
    )
  }

  findEmployeeByEmail() {
    this.employeeService.findByEmail(this.email).subscribe(
      (response: Employee[]) => {
        this.employees = response;
      }, err => {
        console.log(err);
      }
    )
  }

}

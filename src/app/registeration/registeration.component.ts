import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  employee:Employee = new Employee();
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.saveEmployee(this.employee).subscribe(
      (response:Employee)=>{
        console.log(response);
      }
    )
  }

}

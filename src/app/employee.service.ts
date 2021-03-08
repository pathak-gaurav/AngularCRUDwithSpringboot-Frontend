import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = environment.baseApiUrl;

  constructor(private httpClient: HttpClient) { }

  public getEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/employee/all`);
  }

  public saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseUrl}/employee/add`, employee);
  }

  public deleteEmployee(id: number): Observable<Employee[]> {
    return this.httpClient.delete<Employee[]>(`${this.baseUrl}/employee/delete/${id}`);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseUrl}/employee/update`, employee);
  }

  public findByEmail(email:string):Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}/employee/findEmail/${email}`);
  }
}

import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employee = [];
  constructor(private httpclient: HttpClient) { }

getemployee() {
  return this.httpclient.get<{employee: EmployeeModel[]}>
  ('http://localhost:4000/employee');

}




}



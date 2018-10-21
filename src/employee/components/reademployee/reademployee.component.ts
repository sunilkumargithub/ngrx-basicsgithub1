import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/app.state';
import * as fromactions from '../../store/actions/employee.actions';
import { EmployeeService } from '../../services/employee.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reademployee',
  templateUrl: './reademployee.component.html',
  styleUrls: ['./reademployee.component.css']
})
export class ReademployeeComponent implements OnInit {
  Employee: Observable<EmployeeModel[]>;
emp: EmployeeModel[] = [];

  constructor(private store: Store<AppState>,
    private employeeservice: EmployeeService,
  private httpclient: HttpClient) {
    this.Employee = store.select('Addcrud');
    console.log('constructor employee is ' , this.Employee);
  }

  delTutorial(index) {
    this.store.dispatch(new fromactions.RemoveTutorial(index) );
  }
  ngOnInit() {

  }
}

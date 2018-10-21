import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app/app.state';
import * as fromactions from '../../store/actions/employee.actions';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }


  addcrudmethod(name, email, mobile, salary) {
    this.store.dispatch(new fromactions.AddTutorial({name: name, email: email,mobile:mobile,salary:salary} ) );
 console.log('storeis' , this.store);
  }

  ngOnInit() {
  }

}

import {Effect, Actions} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromemployeeactions from '../actions/employee.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
@Injectable()
export class GetStudenEffect {
constructor(private action$: Actions,
private fromservices: EmployeeService
) {}

@Effect()
loadgetstudent$ = this.action$.ofType(fromemployeeactions.ADD_CRUD)
.pipe(switchMap(() => {
return this.fromservices.getemployee().pipe
(map(getstudent => new fromemployeeactions.ADD_CRUD(getstudent)),
catchError(error => 'new getstudenaction.LoadStudentFail(error)')


);
})

);
}


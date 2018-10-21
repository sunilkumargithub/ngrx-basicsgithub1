import { Action } from '@ngrx/store';
import { EmployeeModel } from '../../models/employee.model';
import * as fromactions from '../../store/actions/employee.actions';

// Section 1
const initialState: EmployeeModel = {
    name: 'Initial Tutorial',
    email: 'sunil@gmail.com',
    mobile: 985342722,
    salary: 1000000

};

// Section 2
export function Addreducer(state: EmployeeModel[] = [initialState], action: fromactions.Actions) {

    // Section 3
    switch (action.type) {
        case fromactions.ADD_CRUD:
            return [...state, action.payload];

            case fromactions.ADD_EMPLOYEE_SUCCESS:
            return [...state, action.payload];

        case fromactions.REMOVE_CRUD:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}

// Section 1
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { EmployeeModel } from '../../models/employee.model';

// Section 2
export const ADD_CRUD       = '[CRUD] Add';
export const REMOVE_CRUD    = '[CRUD] Remove';
export const UPDATE_CRUD    = '[CRUD] Update';
export const ADD_EMPLOYEE_SUCCESS = '[EMPLOYEE] Add Success';
// Section 3
export class AddEmployee implements Action {
    readonly type = ADD_CRUD;

    constructor(public payload) {}
}

export class AddEmployeeSuccess implements Action {
  readonly type = ADD_EMPLOYEE_SUCCESS;

  constructor(public payload) {}
}
export class RemoveTutorial implements Action {
    readonly type = REMOVE_CRUD;

    constructor(public payload: number) {}
}
export class UpdateTutorial implements Action {
  readonly type = UPDATE_CRUD;

  constructor(public payload: EmployeeModel) {}
}
// Section 4
export type Actions = AddTutorial | RemoveTutorial | UpdateTutorial |AddEmployeeSuccess;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddemployeeComponent } from '../employee/components/addemployee/addemployee.component';
import { ReademployeeComponent } from '../employee/components/reademployee/reademployee.component';
import { StoreModule } from '@ngrx/store';
import { Addreducer } from '../employee/store/reducers/employee.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    ReademployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      Addcrud: Addreducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

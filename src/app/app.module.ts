import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employeeservice.service';
import { AddempComponent } from './addemp/addemp.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ShowempComponent } from './showemp/showemp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    ShowempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

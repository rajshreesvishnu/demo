import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department-list/department-list.component';



@NgModule({
  declarations: [
    DepartmentComponent,
    DepartmentListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    DepartmentComponent,DepartmentListComponent
  ]
})
export class Module3Module { }

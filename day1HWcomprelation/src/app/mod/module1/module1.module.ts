import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CourseModule } from './course/course.module';



@NgModule({
  declarations: [
    StudentComponent,
    StudentListComponent
   
  ],
  imports: [
    CommonModule,DashboardModule,CourseModule
  ],
  exports:[
    StudentComponent,StudentListComponent
  ]

})
export class Module1Module { }

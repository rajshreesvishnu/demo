import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaComponent } from './java/java.component';
import { PythonComponent } from './python/python.component';



@NgModule({
  declarations: [
    JavaComponent,
    PythonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [ JavaComponent,PythonComponent]
})
export class CourseModule { }

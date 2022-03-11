import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseModule } from './mod/module1/course/course.module';
import { DashboardModule } from './mod/module1/dashboard/dashboard.module';

import { Module1Module } from './mod/module1/module1.module';
import { Module2Module } from './mod/module2/module2.module';
import { Module3Module } from './mod/module3/module3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Module1Module,Module2Module,Module3Module,DashboardModule,CourseModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

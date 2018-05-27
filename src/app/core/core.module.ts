import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { BsNavbarComponent } from './component/bs-navbar/bs-navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([])


  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
  ],
  exports: [
    BsNavbarComponent
  ]
})
export class CoreModule { }

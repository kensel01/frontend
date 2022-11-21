import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthRoutingModule} from './auth-routing.module';
import { LoginRegisterComponent } from "./login-register/LoginRegisterComponent";
import { AuthService } from '../services/auth.service';



@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
   
  ],
  providers:[AuthService]
})
export class AuthModule { }

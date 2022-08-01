import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module'; 
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormField } from '@angular/material/form-field'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatInputModule } from '@angular/material/input';
import{ MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import { LoginComponent } from './login/login.component'; 
import { UserComponent } from './user/user.component'; 
import { UserChildComponent } from './user-child/user-child.component';

const MaterialComponents = [
  MatButtonModule,
  MatSlideToggleModule,
  MatInputModule,
  MatTableModule,
  MatFormField,
  MatFormFieldModule,
  FormsModule,
  
]

@NgModule({
  declarations:[
    LoginComponent,
    UserComponent,
    UserChildComponent,
  ],
  imports: [
    MaterialComponents,
    CommonModule,
    MaterialRoutingModule,
    MaterialComponents 
  ], 
  exports: [MaterialComponents]
})
export class MaterialModule { }

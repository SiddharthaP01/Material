import { NgModule } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

import { MaterialRoutingModule } from '../material-routing/material-routing.module'; 
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatInputModule } from '@angular/material/input';
import{ MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';


import { LoginComponent } from '../login/login.component'; 
import { UserComponent } from '../user/user.component'; 
import { UserChildComponent } from '../user-child/user-child.component';

const MaterialComponents = {
  MatButtonModule,
  MatSlideToggleModule,
  MatInputModule,
  MatTableModule,
  MatFormField,
  FormsModule,
  FormGroup
}

@NgModule({
  declarations:[
    LoginComponent,
    UserComponent,
    UserChildComponent,
  ],
  imports: [
    MaterialRoutingModule,
    MatFormFieldModule 
  ],
  exports: []
})
export class MaterialModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email : new FormControl(''),
    password : new FormControl(''),
  })

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
  constructor(private auth:AuthService, private route: Router) { }

  ngOnInit(): void {
  }
  submit(){
    
    console.log(this.loginForm)
    this.auth.loginUser(this.loginForm.value).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this.route.navigate(['/material/material-user'])
      },
      err => {
        console.log(err)
      }
    )
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

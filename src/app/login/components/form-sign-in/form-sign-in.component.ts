import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent implements OnInit {
  public form!: FormGroup;
  public typePwd = 'password';
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  };

  public register(): void{
    const username = this.form.controls['userName'].value;
    const password = this.form.controls['password'].value;
    this.authService.signIn(username, password).subscribe((response)=>{
      console.log(response);
    })
  }

  public changeType(): void {
    if(this.typePwd == "password"){
      this.typePwd = "text";
    } else {
      this.typePwd = "password";
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http:HttpClient,private router:Router) { }
  signUp(){
    this._http.post<any>("http://localhost:3000/signup",this.signupForm.value).subscribe(res=>{
      alert("Registration Successfull !");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },
    err=>{
      alert("Something went wrong !")
    })
  }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      name: ['',Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      email: ['',Validators.required],
      password: ['',Validators.required],
  
    })
  }
}
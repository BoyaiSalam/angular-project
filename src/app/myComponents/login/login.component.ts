import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder,
    private _http:HttpClient, private router:Router) { }
 
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      "email":['', Validators.required],
      "password":['', Validators.required]
    })
}

 logIn():void{
  this._http.get<any>("http://localhost:3000/signup").subscribe(res=>{
    const user=res.find((a:any)=>{

      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password})
      console.log(user);
    if(user==undefined)
    {
      alert("Login Succesfull !");
      this.loginForm.reset();
      this.router.navigate(['/todos']);
    }else{
      alert("User not Found !");

    }
  },err=>{
    alert("Something went wrong !");
  }
  )
}

}


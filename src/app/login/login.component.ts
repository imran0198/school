import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
data:any
  constructor(private http:HttpClient, private route:Router) { }
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required]),
    Password:new FormControl("",[Validators.required])

  })
  get email(){
    return this.loginForm.get("email")
  }
  get Password(){
  return this.loginForm.get("Password")
  }
  
   
onSubmit(){
  console.log(this.loginForm.value);
  this.http.get<any>(`http://localhost:3000/posts`).subscribe((res)=>{
    // console.log(res);
    const data=res.find((a:any)=>{
     return a.email===this.loginForm.value.email && a.Password===this.loginForm.value.Password
    })

    if(data && data.stud==="student"){
      // console.log(data);
      this.route.navigate(['stu'])
      
    }else{
      this.route.navigate(['user'])
    }
    
  })
  

}
    ngOnInit(): void {
      // this.onSubmit()
    }
  
  }
  

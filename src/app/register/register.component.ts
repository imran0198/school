import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm= new FormGroup({
    fname:new FormControl("",[Validators.required,Validators.pattern("^[a-z A-Z]+$")]),
    email:new FormControl("",[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    stud:new FormControl("",[Validators.required]),
    // quali:new FormControl("",[Validators.required]),
    Password:new FormControl("",[Validators.required,Validators.pattern((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/))]),


  })
  get fname(){
    return this.regForm.get("fname")
  }
  get email(){
    return this.regForm.get("email")
  }
  get stud(){
    return this.regForm.get("stud")
  }
  get Password(){
    return this.regForm.get("Password")
  }

  onSubmit(){
    console.log(this.regForm.value.pass);
    this.http.post<any>('http://localhost:3000/posts',this.regForm.value).subscribe(res=>{
      console.log(res);
      
      alert("registration success")
      this.route.navigate(['login'])
    })
    
  }
  constructor( private http:HttpClient, private route:Router) { }

  ngOnInit(): void {
  }

}

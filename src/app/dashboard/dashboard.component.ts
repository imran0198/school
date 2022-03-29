import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  editForm = new FormGroup({
    fname: new FormControl("", [Validators.required, Validators.pattern("^[a-z A-Z]+$")]),
    email: new FormControl("", [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    Password: new FormControl("", [Validators.required, Validators.pattern((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/))]),


  })
  get fname() {
    return this.editForm.get("fname")
  }
  get email() {
    return this.editForm.get("email")
  }
  get Password() {
    return this.editForm.get("Password")
  }

  onSubmit() {
    return this.editForm.value
  }



  constructor(private http: HttpClient,
    private edit: HttpClient,
    private route: ActivatedRoute) { }
  data
  id: any
  posts: any

  obj = {
    fname: "",
    email: "",
    Password: "",
    id: ""

  }
  getData(data: any) {

  }
  update(d:any) {
    this.posts = this.obj
    this.editForm.controls["fname"].setValue(d.fname),
    this.editForm.controls["email"].setValue(d.email),
    this.editForm.controls["Password"].setValue(d.Password),
    this.editForm.controls["id"].setValue(d.id)




  }
  updateEmp(){

    this.http.put(`http://localhost:3000/posts`,this.editForm.value).subscribe(res=>{
      this.data=res
      alert("updated suceesfully")
    })
    // this.editForm.controls["fname"].setValue(d.fname),
    // this.editForm.controls["email"].setValue(d.email),
    // this.editForm.controls["Password"].setValue(d.Password),
    // this.editForm.controls["id"].setValue(d.id)
    
  }
  ngOnInit(): void {

    this.http.get<any>(`http://localhost:3000/posts`).subscribe(res => { //for table
    this.data = res                                                    //for table
  })

    this.posts = this.obj

    // this.id = this.route.snapshot.params['i']
    // console.log(this.id);


    // this.edit.get<any>(`http://localhost:3000/posts`).subscribe(res => {
    //   // console.log(res);
    //   this.posts = res
    //   console.log(this.posts);

    //   for (let d of this.posts) {
    //     console.log(this.id);
    //   }
    // })
  



  }

}



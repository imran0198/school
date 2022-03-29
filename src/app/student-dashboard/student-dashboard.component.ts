import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
data
  regForm: any;
  constructor(private http:HttpClient) { }
toGet(){
  this.http.get(`http://localhost:3000/posts`,this.regForm.stud.value).subscribe(res=>{
    // console.log();
    return this.data=res
    
  })
}
  ngOnInit(): void {
  }

}

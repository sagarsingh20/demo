import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 public user= []

  constructor(public http: HttpClient, public router: Router) { }

 token=localStorage.getItem('token')

 //Sending token in header
 headersOptions ={
  headers: new HttpHeaders({
  Authorization: `Token ${this.token}`
})
}

  ngOnInit() {
    this.http
        .get('https://fitnation-back.theclientdemos.com/api/v1/users/userprofile/?page_size=15&page=1',{
          headers:this.headersOptions.headers
        }).subscribe(check=>{
         this.user= check['results'];
        })
  }

  
  dd(){
    //console.log(this.token)
        
        
  }
}

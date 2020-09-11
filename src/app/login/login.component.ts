import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(public router: Router, public authServices: AuthService, public http: HttpClient) { }

  create={
    email:null,
    password:null
  }

  ngOnInit() {
  }
  createform (create) {
    this.http.post('https://fitnation-back.theclientdemos.com/api/v1/users/auth/login/', create).subscribe(responsedata=>{

      localStorage.setItem('token',responsedata['key']);
      //console.log(responsedata.key)
      if(responsedata!==null){
        this.router.navigate (['/home/dashboard']);
      }
      else{
        alert("Wrong Data")
      } 
      
    })
    
    sessionStorage.setItem('loginData', JSON.stringify(create));
   
  }


}

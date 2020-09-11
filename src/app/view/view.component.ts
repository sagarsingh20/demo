import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public id;
  public data
  constructor(public http:HttpClient, private route: ActivatedRoute) { }

  viewForm = new FormGroup({
    email: new FormControl(''),
    gender: new FormControl(''),
    height: new FormControl(''),
    weight: new FormControl(''),
    dob: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    country: new FormControl(''),
    meal: new FormControl(''),
    workout: new FormControl(''),
    user_device: new FormControl(''),
    user_firebase_token: new FormControl(''),
  })
  token=localStorage.getItem('token')

  headersOptions ={
    headers: new HttpHeaders({
    Authorization: `Token ${this.token}`
  })
  }

  ngOnInit() {
    //store id
    this.id=this.route.snapshot.params["id"]
   //console.log(this.id);

    this.http
        .get('https://fitnation-back.theclientdemos.com/api/v1/users/userprofile/'+(this.id) ,{
          headers:this.headersOptions.headers
        }).subscribe(dataCheck=>{
          console.log(dataCheck)
          this.viewForm = new FormGroup({
            email: new FormControl(dataCheck['email']),
            gender: new FormControl(dataCheck['gender']['name']),
            height: new FormControl(dataCheck['height']),
            weight: new FormControl(dataCheck['weight']),
            dob: new FormControl(dataCheck['dob']),
            firstname: new FormControl(dataCheck['firstname']),
            lastname: new FormControl(dataCheck['lastname']),
            country: new FormControl(dataCheck['country']),
            meal: new FormControl(dataCheck['meal']),
            workout: new FormControl(dataCheck['workout']),
            user_device: new FormControl(dataCheck['user_device']),
            user_firebase_token: new FormControl(dataCheck['user_firebase_token'])
          })
        })
  }
  
}

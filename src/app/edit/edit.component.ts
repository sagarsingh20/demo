import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(public http: HttpClient, public route: ActivatedRoute) { }
 
  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0]
  //    //console.log(this.selectedFile)
  // //    const uploadData = new FormData();
  // // uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  //  }
  token=localStorage.getItem('token');

  editForm=new FormGroup({
    firstname: new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl(''),
    dob:new FormControl(''),
    height:new FormControl(''),
    weight:new FormControl(''),
    fitness_goal:new FormControl(''),
    profile_pic:new FormControl(''),
    user_subscription:new FormControl(''),
    is_premium:new FormControl(''),
    email_subsciption:new FormControl(''),
    push_notifications:new FormControl(''),
    news_feed_notifications:new FormControl(''),
    is_facebook_user:new FormControl(''),
    is_apple_user:new FormControl('') 
  
  })

  public id;
  public sub;
  selectedFile: File
  headersOptions ={
    headers: new HttpHeaders({
    Authorization: `Token ${this.token}`
  })
  }

  ngOnInit() {
    //subscription Api hit
    this.http.get('https://fitnation-back.theclientdemos.com/api/v1/helpers/subscriptions/').subscribe(sub=>{
      this.sub=sub
      //console.log(this.sub)
    })

    //get data
    this.id=this.route.snapshot.params["id"];
    this.http.get('https://fitnation-back.theclientdemos.com/api/v1/users/userprofile/'+(this.id) ,{
          headers:this.headersOptions.headers
        }).subscribe(dataCheck=>{  
         console.log(dataCheck)
          this.editForm=new FormGroup({
            firstname:new FormControl(dataCheck['firstname']),
            lastname:new FormControl(dataCheck['lastname']),
            email: new FormControl(dataCheck['email']),
            gender:new FormControl(dataCheck['gender']['id']),
            dob:new FormControl(dataCheck['dob']),
            height:new FormControl(dataCheck['height']),
            weight:new FormControl(dataCheck['weight']),
            user_subscription:new FormControl(dataCheck['user_subscription']['subscription_type']['id']),
            fitness_goal: new FormControl(dataCheck['fitness_goal']),
            profile_pic:new FormControl(dataCheck['profile_pic']),
            is_premium:new FormControl(dataCheck['is_premium']),
            email_subsciption:new FormControl(dataCheck['email_subsciption']),
            push_notifications:new FormControl(dataCheck['push_notifications']),
            news_feed_notifications:new FormControl(dataCheck['news_feed_notifications']),
            is_facebook_user:new FormControl(dataCheck['is_facebook_user']),
            is_apple_user:new FormControl(dataCheck['is_apple_user'])
          })
        })
  }

  //PUT API
  update(id,editForm){
    this.http.put('https://fitnation-back.theclientdemos.com/api/v1/users/updateuser/'+this.id, (this.id,this.editForm.value),{
      headers:this.headersOptions.headers
    }).subscribe(check=>{
      console.log(check)    
    })
  }
  data(){
  
  }

}

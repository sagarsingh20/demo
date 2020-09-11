import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {    
   
    const loginData= sessionStorage.getItem('loginData')
    if(loginData){
      return true;
    }else{
      return false;
    }
    
  }
}

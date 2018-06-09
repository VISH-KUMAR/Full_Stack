import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  details = [];
  user:string;
  constructor() { }
  //getting the userdetails
  getUserDetails(){
    return this.details;
  }
  //set the user Details form register page
  setUserDetails(userDetails){
    this.details.push(userDetails);
    console.log(userDetails);
  }
  setUserForDashboard(user){
    this.user = user;
    console.log(this.user)
  }
  getUser(){
    return this.user;
  }
}

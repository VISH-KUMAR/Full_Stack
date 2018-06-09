import { Component, OnInit } from '@angular/core';
import { LoginService } from  '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginDetail= {
    user:'',
    password:''
  }
  constructor(
    public loginService:LoginService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  
  onLogin(){
    let users =  this.loginService.getUserDetails();
    for(let i = 0 ; i < users.length ; i++ ){
      if(this.userLoginDetail.user == users[i].email && this.userLoginDetail.password == users[i].password ||
        this.userLoginDetail.user == users[i].userName && this.userLoginDetail.password == users[i].password ){
        this.loginService.setUserForDashboard(this.userLoginDetail.user);
        this.router.navigate(['/dashboard']);
      }
    }
  }
}

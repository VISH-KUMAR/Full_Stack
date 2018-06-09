import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userDetails = {
    name:'',
    email:'',
    password:''
  }

  constructor( 
    private loginService:LoginService,
    public router:Router
   ) { }

  ngOnInit() {
  }
  
  onRegister(){
    if(this.userDetails.name != '' && this.userDetails.email != '' && this.userDetails.password != ''){
    this.loginService.setUserDetails( {userName:this.userDetails.name , email:this.userDetails.email, password: this.userDetails.password});
    this.router.navigate(['/login']);
    }
  }
}

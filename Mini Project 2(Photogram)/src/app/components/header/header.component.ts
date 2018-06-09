import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string = ''; 

  constructor( public loginService:LoginService ) { 
    this.userName = this.loginService.getUser();
    this.userName = this.userName.split('@')[0];
    
  }

  ngOnInit() {
  
  }

}

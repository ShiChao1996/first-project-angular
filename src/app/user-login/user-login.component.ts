import { Component, OnInit } from '@angular/core';
import { Router,Resolve,ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../user.model';
import { LoginService } from '../login.service';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  animations:[
    fadeIn
  ]
})
export class UserLoginComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {}

  model:User = new User("",'00',"汉","",111,"computer",111);
  submitted = false;
  PswFocus:boolean = false;
  NameFocus:boolean = false;
  pswFocus(){
    this.PswFocus = true;
  }
  pswBlur(){
    this.PswFocus = false;
  }
  nameFocus(){
    this.NameFocus = true;
  }
  nameBlur(){
    this.NameFocus = false;
  }
  userLogin(){
    this.loginService.userLogin().subscribe(()=>{
      if(this.loginService.userLoggedIn){
        let redirect = this.loginService.redirectUrl?this.loginService.redirectUrl:'/user-info';
        this.router.navigate([redirect]);
      }
    });
  }
  adminLogin(){
    this.loginService.adminLogin().subscribe(()=>{
      if(this.loginService.adminLoggedIn){
        let redirect = this.loginService.redirectUrl?this.loginService.redirectUrl:'/admin-news';
        this.router.navigate([redirect]);
      }
    });
  }
  gotoRegister(){
    this.router.navigate(['/user-register'])
  }
}

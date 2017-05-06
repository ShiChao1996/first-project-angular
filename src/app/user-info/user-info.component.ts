import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service';
import { User } from "../user.model";
import { flyIn } from '../animate/fly-in';
import { Router } from '@angular/router';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-user-info',
  templateUrl: 'user-info.component.html',
  styleUrls: ['user-info.component.css'],
  animations: [
    flyIn,
    fadeIn
  ]
})
export class UserInfoComponent implements OnInit {
  users:User[];
  currentUser = new User("",'',"","",0,"",0);
  constructor(private service:UserService,public router:Router) {}
  get(){
   this.service.getCurrentUser()
      .subscribe(
        user=>{
            this.currentUser = new User(user[0].name,user[0].sex,user[0].race,user[0].degree,user[0].stuId,user[0].department,user[0].phone)
        },
        error=>console.log(error)
      )
  }
  /*add(name:string){
    this.service.addUser(name)
      .subscribe(
        user=>{this.users.push(user);console.log(this.users)},
        error=>console.log(error)
      )
  }*/
  ngOnInit() {
    this.get();
  }
  changeInfo(){
    //console.log(this.service.getCurrentUser())
    this.router.navigate(['/user-info-change']);
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { fadeIn } from '../animate/fade-in';
@Component({
  selector: 'app-user-register',
  templateUrl: 'user-register.component.html',
  styleUrls: ['user-register.component.css'],
  animations:[
    fadeIn
  ]
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  model:User = new User("lovae",'00',"汉","benke",111,"computer",111);
  submitted = false;
  PswFocus:boolean = false;
  NameFocus:boolean = false;
  ConfirmFocus:boolean = false;
  nameFocus(){
    this.NameFocus = true;
  }
  nameBlur(){
    this.NameFocus = false;
  }
  pswFocus(){
    this.PswFocus = true;
  }
  pswBlur(){
    this.PswFocus = false;
  }
  confirmFocus(){
    this.ConfirmFocus = true;
  }
  confirmBlur(){
    this.ConfirmFocus = false;
  }

  onSubmit() { this.submitted = true; }
}

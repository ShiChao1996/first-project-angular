import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { AppService } from '../../app.service';
import { height1,height2,height3 } from '../../animate/height';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations:[
    height1,height2,height3
  ]
})
export class SideMenuComponent implements OnInit {

  state1:string = 'active';
  state2:string = 'inactive';
  constructor(public loginService:LoginService,public appService:AppService){}

  ngOnInit() {
  }

  closeSideBar(){
    this.appService.closeSideBar();
  }
  changeState1(){
    this.state1 = this.state1==='active'?'inactive':'active';
    if(this.state1==='active')
    this.state2 = 'inactive';
  }
  changeState2(){
    this.state2 = this.state2==='active'?'inactive':'active';
    if(this.state2==='active')
      this.state1 = 'inactive';
  }
}

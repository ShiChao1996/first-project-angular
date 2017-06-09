import { Injectable } from '@angular/core';

@Injectable()
export class AppService{
  sideBarState:string = 'inactive';
  maskState:string = "inactive";
  sideBarShow:boolean = false;
  changeSideBarState(){
    this.sideBarState = this.sideBarState==='active'?'inactive':'active';
    this.maskState = this.sideBarState;
    this.sideBarShow = !this.sideBarShow;

  }
  closeSideBar(){
    this.sideBarState = 'inactive';
    this.maskState = "inactive";
    this.sideBarShow = true;
  }
}

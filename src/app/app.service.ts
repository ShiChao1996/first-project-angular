import { Injectable } from '@angular/core';

@Injectable()
export class AppService{
  sideBarState:string = 'inactive';
  sideBarShow:boolean = false;
  changeSideBarState(){
    this.sideBarState = this.sideBarState==='active'?'inactive':'active';
    this.sideBarShow = this.sideBarShow?false:true;
  }
  closeSideBar(){
    this.sideBarState = 'inactive';
    this.sideBarShow = true;
  }
}

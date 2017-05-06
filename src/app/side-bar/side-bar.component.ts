import { Component, OnInit,ElementRef } from '@angular/core';
import { LoginService } from '../login.service';
import { AnimationService } from '../animate/animation';
import { AppService } from '../app.service';
import { left } from '../animate/left';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations:[
    left
  ]
})
export class SideBarComponent implements OnInit {
  sideBarShow:boolean = true;
  smallBarShow1:boolean = false;
  smallBarShow2:boolean = false;
  timer1;
  timer2;
  constructor(public appService:AppService,public animate:AnimationService,public loginService:LoginService) { }

  changeState(){
    this.appService.changeSideBarState();
  }
  ngOnInit() {
  //  this.animate.startMove(this.el.nativeElement,{left:-200,opacity:80})
  }
 /* showSideBar(){
    this.sideBarShow = !this.sideBarShow;
    if(this.sideBarShow == true){
      this.animate.startMove(this.el.nativeElement,{left:-200,opacity:80})
    }
    else{
      this.animate.startMove(this.el.nativeElement,{left:0,opacity:100})
    }
  }*/
  mouseoverIcon1(){
    this.smallBarShow1 = true;
    this.smallBarShow2 = false;
  }
  mouseoutIcon1(){
    let _this = this;
    this.timer1 = setTimeout(function () {
      _this.smallBarShow1 = false;
    },500)
  }
  mouseenterMenu1(){
    clearTimeout(this.timer1);
  }
  mouseoverIcon2(){
    this.smallBarShow2 = true;
    this.smallBarShow1 = false;
  }
  mouseoutIcon2(){
    let _this = this;
    this.timer2 = setTimeout(function () {
      _this.smallBarShow2 =false;
    },500)
  }
  mouseenterMenu2(){
    clearTimeout(this.timer2);
  }

}

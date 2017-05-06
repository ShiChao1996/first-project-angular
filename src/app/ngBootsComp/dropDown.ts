import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'demo-dropdown',
  template: `<span dropdown (onToggle)="toggled($event)">

  <a href id="simple-dropdown" dropdownToggle>

    <span style="font-size: 20px">userName</span>
    <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>
  </a>
  <ul style="width: 170px;" class="dropdown-menu-right" dropdownMenu aria-labelledby="simple-dropdown">
    <li >
      <a class="dropdown-item" (click)="logout()"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>注销</a>
      <a class="dropdown-item" (click)="changePsw()"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span>修改密码</a>
    </li>
  </ul>
</span>`,
  styles:[`a{
text-align: center;
text-decoration: none;
}`]
})
export class DemoDropdownComponent {
  constructor(public loginService:LoginService,public router:Router){}
  logout(){
    this.loginService.adminLoggedIn = this.loginService.userLoggedIn = false;
    this.router.navigate(['/user-login']);
  }
  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }
  changePsw(){
    this.router.navigate(['/change-psw'])
  }
}

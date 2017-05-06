import { Injectable } from '@angular/core';
import { CanActivate,
    CanActivateChild,Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot ,
    NavigationExtras ,
    CanLoad,Route
} from '@angular/router';
import { LoginService } from './login.service';
import { AppService } from './app.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    constructor(private loginService:LoginService,
                private appService:AppService,
                private router:Router){}
    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):boolean{
        let url:string = state.url;
        return this.checkLogin(url);
    }
    checkLogin(url:string):boolean{
        if(this.loginService.userLoggedIn){
          this.appService.closeSideBar();
          return true;
        }

        alert('请先用户登录！');
        this.loginService.redirectUrl = url;
        let sessionId = 123456;
        let navigationExtras :NavigationExtras={
            queryParams:{'session_id':sessionId},
            fragment:'anchor'
        };
        this.router.navigate(['/user-login'],navigationExtras);
        return false;
    }
    canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        return this.canActivate(route,state);
    }
    canLoad(route:Route):boolean{
        let url = `/${route.path}`;
        return this.checkLogin(url);
    }
}

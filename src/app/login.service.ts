import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService{
    userLoggedIn:boolean = false;
    adminLoggedIn:boolean = true;
    redirectUrl:string;

    userLogin():Observable<boolean>{
        return Observable.of(true).delay(2000).do(val=>{this.userLoggedIn=true;this.adminLoggedIn = false;});
    }
    adminLogin():Observable<boolean>{
     return Observable.of(true).delay(2000).do(val=>{this.userLoggedIn=false;this.adminLoggedIn = true;});
    }
    logout():void{
        this.userLoggedIn = false;
    }
}

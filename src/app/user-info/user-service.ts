import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/observable';
import { User } from '../user.model';

@Injectable()
export class UserService {
  private UserUrl = 'app/mock-data/user.json';
  constructor(private http:Http){}

  getCurrentUser(): Observable<User> {
    return this.http
      .get(this.UserUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /*addUser(name:string):Observable<User>{
    let data = new URLSearchParams();
    data.append('name', name);
    let headers = new Headers({'Content-type':'application/json'});
    let options = new RequestOptions({headers:headers});

    return this.http.post(this.UserUrl,data);

    /!*return this.http.post(this.UserUrl,{name},options)
      .map(this.extractData)
      .catch(this.handleError);*!/
  }*/

  private extractData(res:Response){
    let body = res.json();
    return body.data || {};
  }

  private handleError(error:Response|any){
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

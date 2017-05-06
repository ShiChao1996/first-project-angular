import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions,URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class NewsService {
  private UserUrl = 'app/mock-data/news.json';
  public currentNewId:number = 0;
  constructor(private http:Http){}

  getNews(): Observable<any> {
    return this.http
      .get(this.UserUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNew(id:number):Observable<any>{
    return this.http.get(this.UserUrl)
      .map((res:Response)=>{
        res.json().data
      })
      .catch(this.handleError)
  }
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

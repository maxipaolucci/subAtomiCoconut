import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Observable} from "rxjs/Rx";

@Injectable()
export class AppService {

  private serverUrl : string = 'https://api.cryptonator.com/api/ticker/';
  

  constructor(private http : Http) {

  }

  getPrices(currency = 'btc') : Observable<any> {
    return this.http.get(`${this.serverUrl}${currency}-usd`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res: Response) : any {
    let body = res.json();
    if (body.success === true) {
      return body.ticker;
    } else {
      throw body;
    }
    
  }

  // private handleError(error: any) {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
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

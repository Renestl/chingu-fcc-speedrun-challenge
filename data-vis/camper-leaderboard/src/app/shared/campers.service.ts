import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Camper } from './camper.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CampersService {

  constructor(private http:Http) { }

  getCampers() :Observable<any> {
    return this.http
            .get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .map(resp => resp.json());
  }

}

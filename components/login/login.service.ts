import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommonService } from './../../_services/_common/common.service';

@Injectable()
export class LoginService {

    public apiUrl: string = "";

    constructor(public _http: HttpClient, private _commonSerice: CommonService) {
        this.apiUrl = this._commonSerice.apiUrl;
    }

    loginProcess(username: string, password: string) {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify({ "username": username, "password": password });
        let options = { headers: header };

        return this._http.post(this.apiUrl + "Login/Login", body, options);
    }

}

import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommonService } from 'src/app/_services/_common/common.service';
import { CriteriaDetail } from 'src/app/_services/_common/types';

@Injectable()
export class ChartsService {

    public apiUrl: string = "";

    constructor(public _http: HttpClient, private _commonSerice: CommonService) {
        this.apiUrl = this._commonSerice.apiUrl;
    }

    GetCriteriasByFilter(locationId: number, placeId: number) {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify({ "locationId": locationId, "placeId": placeId });
        let options = { headers: header };

        return this._http.post(this.apiUrl + "Criteria/GetCriteriasByFilter", body, options);
    }

    GetRedCriteriasByFilter(locationId: number, placeId: number) {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify({ "locationId": locationId, "placeId": placeId });
        let options = { headers: header };

        return this._http.post(this.apiUrl + "Criteria/GetRedCriteriasByFilter", body, options);
    }

}
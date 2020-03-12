import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CommonService } from 'src/app/_services/_common/common.service';
import { CriteriaDetail } from 'src/app/_services/_common/types';

@Injectable()
export class MeasureDetailService {

    public apiUrl: string = "";

    constructor(public _http: HttpClient, private _commonSerice: CommonService) {
        this.apiUrl = this._commonSerice.apiUrl;
    }

    SaveCriteria(criteriaList: Array<CriteriaDetail>) {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify({ "criteriaList": criteriaList });
        let options = { headers: header };

        return this._http.post(this.apiUrl + "Criteria/SaveCriteria", body, options);
    }

}
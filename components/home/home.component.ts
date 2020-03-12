import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/_services/_common/common.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private _commonService: CommonService) { }

    ngOnInit() {
        this._loadDropdownLists();
    }
    private _loadDropdownLists() {
        this._commonService.getLocationList();
        this._commonService.getPlaceList();
        this._commonService.getCriteriaList();
        this._commonService.getUserList();

    }
}
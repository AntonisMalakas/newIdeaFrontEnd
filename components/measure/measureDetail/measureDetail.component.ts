import { Component, OnInit } from '@angular/core';
import { LocationItem, PlaceItem } from '../measure.model';
// import { Criteria } from './measureDetail.model';
import { CommonService } from 'src/app/_services/_common/common.service';
import { Router } from '@angular/router';
import { User, Criteria, CriteriaDetail, ResponseObject } from 'src/app/_services/_common/types';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { NgForm } from '@angular/forms';
import { MeasureDetailService } from './measureDetail.service';

@Component({
    selector: 'measure-detail',
    templateUrl: 'measureDetail.component.html'
})

export class MeasureDetailComponent implements OnInit {

    public loggedUser: User;
    public selectedLocation: LocationItem;
    public selectedPlace: PlaceItem;

    public usersList: Array<User> = [];

    public criteriaList: Array<Criteria> = [];
    public criteriaDetailList: Array<CriteriaDetail> = [];

    public selectedCriteria: CriteriaDetail;


    constructor(private _router: Router, private _commonService: CommonService, private modalService: NgbModal, private _measureDetailService: MeasureDetailService) { }

    ngOnInit() {
        this._setStateData();
        this._getLoggedUser();
        this._getCommonList();
        this._mapCriterias();
    }

    public setMeasureValue(measureValue: string) {
        this.selectedCriteria.measure_value = measureValue;
        this.selectedCriteria.assigned_user_id = null;
        this.selectedCriteria.note = '';
        this.selectedCriteria.target_date = null;

    }

    public saveCriteriaList() {
        //should prompt user to save ?
        this._measureDetailService.SaveCriteria(this.criteriaDetailList).subscribe((resp: ResponseObject) => {
            if (resp.success) {
                // add loading to http interceptor
                // display success message
                // redirect to measure
                this._router.navigateByUrl('/home/measure');
            } else {
                // display error message
            }
        })
    }

    public openCriteriaDetailPopup(criteriaDetail: CriteriaDetail, content) {
        this.modalService.open(content, { size: 'lg' });
        this.selectedCriteria = _.cloneDeep(criteriaDetail);
    }

    public saveCriteriaSettings(c, ratingForm: NgForm) {
        if (this.selectedCriteria.measure_value == 'red' && !ratingForm.form.valid) return;
        for (let index = 0; index < this.criteriaDetailList.length; index++) {
            if (this.criteriaDetailList[index].id == this.selectedCriteria.id) {
                this.selectedCriteria = this._formateTargetDate(this.selectedCriteria);
                this.criteriaDetailList[index] = this.selectedCriteria;

                break;
            }
        }
        c('close modal');
    }
    private _formateTargetDate(selectedCriteria: CriteriaDetail): CriteriaDetail {
        if (selectedCriteria.target_date != null) {
            selectedCriteria.target_date = new Date(selectedCriteria.target_date['year'], selectedCriteria.target_date['month'] - 1, selectedCriteria.target_date['day'], 0, 0, 0)

        }
        return selectedCriteria;
    }

    private _mapCriterias() {
        this.criteriaDetailList = [];
        this.criteriaList.forEach((criteriaItem, index) => {
            this.criteriaDetailList.push({
                id: index + 1,
                criteria_id: criteriaItem.id,
                criteria_name: criteriaItem.criteria_name,
                location_id: this.selectedLocation.id,
                place_id: this.selectedPlace.id,
                user_id: this.loggedUser.id,
                assigned_user_id: null,
                measure_value: 'gray',
                note: '',
                target_date: null,
                curr_date: new Date()
            })
        });
    }
    private _getCommonList() {
        this.criteriaList = this._commonService.criteriaList;
        this.usersList = this._commonService.userList;
    }
    private _getLoggedUser() {
        this.loggedUser = this._commonService.getUser();
    }
    private _setStateData() {
        let stateData = history.state.data;
        if (stateData == undefined) {
            this._router.navigateByUrl('/home/measure');
        }
        else {
            this.selectedLocation = stateData.selectedLocation;
            this.selectedPlace = stateData.selectedPlace;
        }
    }
}
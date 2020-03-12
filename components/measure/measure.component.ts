import { Component, OnInit } from '@angular/core';
// import { LocationItem, PlaceItem } from './measure.model';
import { Location, Place } from './../../_services/_common/types';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/_services/_common/common.service';

@Component({
    selector: 'measure',
    templateUrl: 'measure.component.html'
})

export class MeasureComponent implements OnInit {
    public locationsList: Array<Location> = [];
    public placesList: Array<Place> = [];

    public selectedLocation: Location;
    public selectedPlace: Place;

    public showPlacesOption: boolean = false;
    public showNextStep: boolean = false;

    constructor(private _router: Router, private _commonService: CommonService) {

    }

    ngOnInit() {
        this._loadListData();
    }


    private _loadListData() {
        if (this._commonService.locationList.length == 0) {
            this._router.navigateByUrl('/home');
            return;
        }
        this.locationsList = this._commonService.locationList;
        this.placesList = this._commonService.placeList;
    }

    public setLocation(location: Location) {
        this.selectedLocation = location;
        this.showPlacesOption = true;
        this.selectedPlace = null;
        this.showNextStep = false;

    }

    public setPlace(place: Place) {
        this.selectedPlace = place;
        this.showNextStep = true;
    }

    goToComponentB(): void {
        // this._router.navigateByUrl('/home/measureDetail');
        this._router.navigate(['/home/measureDetail'], {
            state: {
                data: {
                    selectedLocation: this.selectedLocation,
                    selectedPlace: this.selectedPlace
                }
            }
        });
    }
}
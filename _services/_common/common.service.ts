import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location, Place, User, Criteria } from './types';

@Injectable({ providedIn: 'root' })
export class CommonService {

    public loggedUser: User;

    private selectedLocation: Location;
    private selectedPlace: Place;


    public loginApiUrl: string = "http://localhost:50399/api/";
    public apiUrl: string = "http://localhost:50211/api/";

    public locationList: Array<Location> = [];
    public placeList: Array<Place> = [];
    public criteriaList: Array<Criteria> = [];
    public userList: Array<User> = [];



    constructor(private _http: HttpClient) { }


    // setters
    public setUser(_value: User) {
        this.loggedUser = _value;
    }
    public setSelectedLocation(value: Location) {
        this.selectedLocation = value;
    }
    public setSelectedPlace(value: Place) {
        this.selectedPlace = value;
    }

    // getters
    public getUser() {
        return this.loggedUser;
    }
    public getSelectedLocation() {
        return this.selectedLocation;
    }
    public getSelectedPlace() {
        return this.selectedPlace;
    }

    // Get Dropdown Lists

    public getLocationList() {
        this._getLocationList().subscribe((resp: Array<Location>) => {
            this.locationList = resp;
        });
    }

    public getPlaceList() {
        this._getPlaceList().subscribe((resp: Array<Place>) => {
            this.placeList = resp;
        });
    }

    public getCriteriaList() {
        this._getCriteriaList().subscribe((resp: Array<Criteria>) => {
            this.criteriaList = resp;
        });
    }

    public getUserList() {
        this._getUserList().subscribe((resp: Array<User>) => {
            this.userList = resp;
        });
    }



    private _getLocationList() {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify({});
        let options = { headers: header };

        return this._http.get<Array<Location>>(this.apiUrl + "ListValues/GetLocationList", options);
    }

    private _getPlaceList() {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify({});
        let options = { headers: header };

        return this._http.get<Array<Place>>(this.apiUrl + "ListValues/GetPlaceList", options);
    }

    private _getCriteriaList() {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify({});
        let options = { headers: header };

        return this._http.get<Array<Criteria>>(this.apiUrl + "ListValues/GetCriteriaList", options);
    }

    private _getUserList() {
        let header = new HttpHeaders().set('Content-Type', 'application/json');
        let body = JSON.stringify({});
        let options = { headers: header };

        return this._http.get<Array<User>>(this.apiUrl + "ListValues/GetUserList", options);
    }







}
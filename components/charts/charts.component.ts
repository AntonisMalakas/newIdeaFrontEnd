import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';
import { Location, Place, AssignedCriteriaDetail } from './../../_services/_common/types';
import { CommonService } from 'src/app/_services/_common/common.service';
import { Router } from '@angular/router';
import { ChartsService } from './charts.service';

@Component({
    selector: 'charts',
    templateUrl: 'charts.component.html'
})

export class ChartsComponent implements OnInit {

    public locationsList: Array<Location> = [];
    public placesList: Array<Place> = [];

    public selectedLocationId: number;
    public selectedPlaceId: number;

    public grouppedCriterias: Array<any> = [];

    public pieChartOptions: ChartOptions = {
        responsive: true,
    };
    public pieChartLabels: Label[] = [
        'Green',
        'Amber',
        'Red',
        'Gray'
    ];
    public pieChartData: SingleDataSet = [30, 30, 20, 20];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];
    public pieChartColor = [
        {
            backgroundColor: [
                'green',
                '#ffbf00',
                'red',
                'gray'
            ]
        }
    ];

    public redLightOverviewList: Array<AssignedCriteriaDetail> = [];

    constructor(private _router: Router, private _commonService: CommonService, private _chartsService: ChartsService) { }

    ngOnInit() {
        this._loadListData();
        // get all charts data??
    }


    private _loadListData() {
        if (this._commonService.locationList.length == 0) {
            this._router.navigateByUrl('/home');
            return;
        }
        this.locationsList = this._commonService.locationList;
        this.placesList = this._commonService.placeList;
    }

    public selectedFilterChange() {
        this.selectedLocationId
        this.selectedPlaceId

        this._chartsService.GetCriteriasByFilter(this.selectedLocationId, this.selectedPlaceId).subscribe((resp: Array<any>) => {
            this.grouppedCriterias = this._mapChartsData(resp);
        });

        this._chartsService.GetRedCriteriasByFilter(this.selectedLocationId, this.selectedPlaceId).subscribe((resp: Array<AssignedCriteriaDetail>) => {
            this.redLightOverviewList = resp;
        });

    }
    private _mapChartsData(resp: Array<any>): any[] {
        let mappedCriteriaList = [];
        resp.forEach(criteriaItem => {
            mappedCriteriaList.push({
                pieChartData: [criteriaItem.green_pct, criteriaItem.amber_pct, criteriaItem.red_pct, criteriaItem.gray_pct],
                criteria_name: criteriaItem.criteria_name,
                criteria_id: criteriaItem.criteria_id
            })
        });
        return mappedCriteriaList;
    }

}
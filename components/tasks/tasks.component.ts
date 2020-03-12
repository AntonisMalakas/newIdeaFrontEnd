import { Component, OnInit } from '@angular/core';
import { User, AssignedCriteriaDetail } from 'src/app/_services/_common/types';
import { CommonService } from 'src/app/_services/_common/common.service';
import { TasksService } from './tasks.service';

@Component({
    selector: 'tasks',
    templateUrl: 'tasks.component.html'
})

export class TasksComponent implements OnInit {
    public selectedUser: User;
    public criteriaDetailList: Array<AssignedCriteriaDetail> = [];

    constructor(private _commonService: CommonService, private _tasksService: TasksService) { }

    ngOnInit() {
        this._getSelectedUser();
        this._getAssignedCriteriaByUserId();
    }
    private _getAssignedCriteriaByUserId() {
        this._tasksService.GetAssignedCriteriaByUsedId(this.selectedUser.id).subscribe((resp: Array<AssignedCriteriaDetail>) => {
            this.criteriaDetailList = resp;
        });
    }
    private _getSelectedUser() {
        this.selectedUser = this._commonService.getUser();
    }
}
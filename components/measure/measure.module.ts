import { NgModule } from '@angular/core';

import { MeasureComponent } from './measure.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MeasureDetailComponent } from './measureDetail/measureDetail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
    {
        path: '',
        component: MeasureComponent
    },


];

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        NgForm,
        RouterModule.forChild(routes),
    ],
    exports: [FormsModule],
    declarations: [MeasureComponent, MeasureDetailComponent],
    providers: [],
})
export class MeasureModule { }

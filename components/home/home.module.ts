import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SidebarModule } from '../sidebar/sidebar.module';
import { ChartsComponent } from '../charts/charts.component';
import { NavbarModule } from '../navbar/navbar.module';
// import { MeasureModule } from '../measure/measure.module';
import { MeasureComponent } from '../measure/measure.component';
import { MeasureDetailComponent } from '../measure/measureDetail/measureDetail.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MeasureDetailService } from '../measure/measureDetail/measureDetail.service';
import { TasksComponent } from '../tasks/tasks.component';
import { TasksService } from '../tasks/tasks.service';

import { ChartsModule } from 'ng2-charts';
import { ChartsService } from '../charts/charts.service';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [ {
                path: 'tasks',
                component: TasksComponent
            },
            {
                path: 'measure',
                component: MeasureComponent
            },
            {
                path: 'measureDetail',
                component: MeasureDetailComponent
            },
            {
                path: 'charts',
                component: ChartsComponent
            }
        ]
    },

];


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        SidebarModule,
        NavbarModule,
        NgSelectModule,
        NgbModule,
        ChartsModule
        // MeasureModule
    ],
    exports: [],
    declarations: [
        HomeComponent,
        MeasureComponent,
        ChartsComponent,
        TasksComponent,
        MeasureDetailComponent
    ],
    providers: [HomeService, MeasureDetailService, TasksService, ChartsService],
})
export class HomeModule { }

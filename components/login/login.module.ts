import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule { }

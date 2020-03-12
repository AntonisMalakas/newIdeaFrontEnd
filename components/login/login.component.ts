import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { CommonService } from 'src/app/_services/_common/common.service';
import { User } from 'src/app/_services/_common/types';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    public loading: boolean = false;
    public submitted: boolean = false;

    constructor(private _formBuilder: FormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _loginService: LoginService,
        private _commonService: CommonService) { }

    ngOnInit() {
        this._initializeFormGroup();
    }

    private _initializeFormGroup() {
        this.loginForm = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this._loginService.loginProcess(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe((resp: User) => {
            this.loading = false;
            if (resp != null) {

                this._commonService.setUser(resp);
                this._router.navigateByUrl("/home");
            }
            else {
                // should show error
            }
        });


    }
}
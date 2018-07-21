import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  LoginForm: FormGroup;
  CheckUser = false;
  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private router: Router) {
    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  Login() {
    this.username = this.LoginForm.value.username;
    this.password = this.LoginForm.value.password;
    this.accountService.findAccount(this.username, this.password);
    if (this.accountService.loggedIn) {
      this.router.navigate(['/posts']);
    } else {
      this.CheckUser = true;
    }
  }
}

import { AccountService } from './../account.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  account = new Account('', '', []);
  constructor(private formBuilder: FormBuilder, private accountService: AccountService, private router: Router) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  signUp() {
    this.account.username = this.signUpForm.value.username;
    this.account.password = this.signUpForm.value.password;
    this.accountService.addAccount(this.account);
    this.router.navigate(['/login']);
  }
}

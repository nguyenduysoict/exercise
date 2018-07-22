import { PostService } from './post.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from './account.service';
import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';
  loggedIn: false;
  searchForm: FormGroup;
  posts: Post[];
  isVisible = false;
  isOkLoading = false;
  searchKey: string;
  constructor(private formBuilder: FormBuilder,
     private accountService: AccountService, private router: Router) {
       this.searchForm = this.formBuilder.group({
         textSearch: ['', Validators]
       });
  }
  newPost() {
    if (this.logIn) {
      this.router.navigate(['posts/new']);
    } else {
      this.isVisible = true;
    }
  }

  get profilePicture() {
     return this.accountService.getAccountPicture();
  }
  postStore = () => {
    if (this.logIn) {
      this.router.navigate(['posts/store']);
    } else {
      this.isVisible = true;
    }
  }


  searchHandler = () => {
    this.searchKey = this.searchForm.value.textSearch;
    this.router.navigate(['posts/search'], {queryParams : {keyword: this.searchKey}});
  }

  handleOk(): void {
    this.isOkLoading = true;
    window.setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 0);
    this.router.navigate(['/login']);
  }

  get logIn() {
    return this.accountService.loggedIn;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }

  Logout = () => {
    this.accountService.loggedIn = false;
    this.router.navigate(['login']);
  }

  uploadPost = () => {
    this.router.navigate(['profile']);
  }
}

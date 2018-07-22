import { AccountService } from './../account.service';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private accountService: AccountService, private postService: PostService) { }

  postDetail: Post;
  logged: boolean;
  author: string;
  ngOnInit() {
    this.postDetail = this.postService.getPostDetail();
    if (this.accountService.loggedIn) {
      this.accountService.checkLogPost(this.postDetail);
      this.logged = this.accountService.loggedPost;
      this.author = this.accountService.getAccountId();
    }
  }


  get logIn() {
    return this.accountService.loggedIn;
  }

  kipalog() {
    this.accountService.addLogPost(this.postDetail);
    this.logged = true;
  }

  unKipalog() {
    this.accountService.removeLogPost(this.postDetail);
    this.logged = false;
  }

}

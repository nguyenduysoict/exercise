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

  loggIn: boolean;
  constructor(private accountService: AccountService, private postService: PostService) { }

  postDetail: Post;
  logged: boolean;
  ngOnInit() {
    this.postDetail = this.postService.getPostDetail();
    if (this.accountService.loggedIn) {
      this.accountService.findLogPost(this.postDetail);
    }
    this.logged = this.accountService.loggedPost;
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

import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  posts: Post[];
  author: string;
  NotFound: boolean;
  constructor(private accountService: AccountService,
    private postService: PostService) { }

  ngOnInit() {
    this.author = this.accountService.getAccountId();
    this.posts = this.postService.getUploadPostbyAccount();
    if (this.posts.length === 0) {
      this.NotFound = true;
    } else {
      this.NotFound = false;
    }
  }

}

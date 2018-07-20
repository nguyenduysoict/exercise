import { AccountService } from './../account.service';
import { PostService } from './../post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  sub: Subscription;
  loggedIn = false;
  len: number;
  posts: Post[] = [];
  id: number;
  loading = true;
  loadingMore = false;
  showLoadingMore = true;
  title: string;
  constructor(
    private router: Router,
    private accountService: AccountService,
    private postService: PostService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.posts = this.postService.getPosts();
      this.loading = false;
    }, 1000);
    this.sub = this.postService.postChanged
    .subscribe((posts) => {
      this.posts = posts;
      console.log(this.posts);
    });
  }

  onLoadMore = () => {
    this.loadingMore = true;
    setTimeout(() => {
      const posts = [...this.posts];
      this.posts = this.posts.concat(posts);
      this.loadingMore = false;
    }, 500);
  }

  increaseLike = (idNum) => {
    this.postService.increasePostLike(idNum);
  }

  increaseShare = (idNum) => {
    this.postService.increasePostShare(idNum);
  }

  onPostDetail(str, item) {
    this.title = str;
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '-');
    str = str.replace(/ /g, '-');
    str = str.trim();
    this.postService.passPostDetail(item);
    this.router.navigate(['posts/', str]);
  }

  xemacc() {
    this.accountService.showAcc();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { Post } from './../post';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-search-result',
  templateUrl: './post-search-result.component.html',
  styleUrls: ['./post-search-result.component.css']
})
export class PostSearchResultComponent implements OnInit, OnDestroy {

  sub: Subscription;
  searchKey: string;
  posts: Post[] = [];
  temp: Post[];
  title: string;
  NotFound = false;
  constructor(private router: Router, private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams
      .subscribe((queryParam: any) => {
        this.searchKey = queryParam.keyword;
        this.posts = this.postService.searchPost(this.searchKey);
        if (this.posts.length !== 0) {
          console.log('found');
          this.NotFound = false;
        } else {
          console.log('not found');
          this.NotFound = true;
        }
      });
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

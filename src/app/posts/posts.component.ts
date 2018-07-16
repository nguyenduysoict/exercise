import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { HttpClient } from '../../../node_modules/@angular/common/http';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  data: any[] = [];
  len: number;
  posts: Post[];
  loading = true;
  loadingMore = false;
  showLoadingMore = true;
  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.getData((res: any) => {
    this.posts = this.postService.getPosts();
    this.len = this.posts.length;
    this.data = new Array(this.len).fill({this: this.posts}).map((i, index) => {
      this.loading = false;
      return {
        likeC: this.posts[index].likeCount,
        shareC: this.posts[index].shareCount,
        title: this.posts[index].title,
        imgPath: this.posts[index].imgPath,
        tag: this.posts[index].tag,
        content: this.posts[index].content
      };
    });
      this.loading = false;
      console.log(this.data);
    });
  }

  getData(callback: (res: any) => void): void {
    this.http.get(fakeDataUrl).subscribe((res: any) => callback(res));
}

  onLoadMore(): void {
    this.loadingMore = true;
    this.http.get(fakeDataUrl).subscribe((res: any) => {
      this.data = this.data.concat(this.data);
      this.loadingMore = false;
    });
  }
}

import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  isVisible = false;
  newPostForm: FormGroup;
  post = new Post('', '', '', '', '', '', '', 0, 0);
  constructor(private router: Router,
    private postService: PostService,
    private formBuilder: FormBuilder,
    private msg: NzMessageService,
    private accountService: AccountService) {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      tag: ['', Validators.required],
      content: ['', Validators.required],
      mainContent: ['', Validators.required],
      imgPath: ['', Validators.required]
    });
 }

  ngOnInit() {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  handleChange({ file }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);

    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  onPost() {
    this.post.content = this.newPostForm.value.content;
    this.post.imgPath = this.newPostForm.value.imgPath;
    this.post.likeCount = 0;
    this.post.shareCount = 0;
    this.post.author = this.accountService.getAccountId();
    this.post.tag = this.newPostForm.value.tag;
    this.post.mainContent = this.newPostForm.value.mainContent;
    this.post.title = this.newPostForm.value.title;
    this.postService.addPost(this.post);
    this.router.navigate(['/posts']);
}

}

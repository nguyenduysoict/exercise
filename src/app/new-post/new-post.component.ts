import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  isVisible = false;
  newPostForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private msg: NzMessageService) {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      tag: ['', Validators.required],
      content: ['', Validators.required],
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

}

import { PostDetailComponent } from './post-detail/post-detail.component';
import { AccountService } from './account.service';
import { PostService } from './post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import en from '@angular/common/locales/en';
registerLocaleData(en);

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostsComponent } from './posts/posts.component';
import { AppRoutingModule } from './routing.module';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NewPostComponent } from './new-post/new-post.component';
import { StorePostComponent } from './store-post/store-post.component';
import { PostSearchResultComponent } from './post-search-result/post-search-result.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostComponent,
    StorePostComponent,
    LoginComponent,
    SignupComponent,
    PostsComponent,
    PostDetailComponent,
    PostSearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ { provide: NZ_I18N, useValue: en_US }, PostService, FormBuilder, AccountService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

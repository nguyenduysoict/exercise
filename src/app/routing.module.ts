import { StorePostComponent } from './store-post/store-post.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostSearchResultComponent } from './post-search-result/post-search-result.component';
import { ProfileComponent } from './profile/profile.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: PostsComponent },
    { path: 'posts/new', component: NewPostComponent },
    { path: 'posts/store', component: StorePostComponent },
    { path: 'posts/search', component: PostSearchResultComponent },
    { path: 'posts/:title', component: PostDetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', component: ProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

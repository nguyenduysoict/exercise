import { LoginComponent } from './login/login.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '../../node_modules/@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorePostComponent } from './store-post/store-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SignupComponent } from './signup/signup.component';

const AppRoutes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full'},
    { path: 'posts', component: PostsComponent},
    { path: 'posts/new', component: NewPostComponent},
    { path: 'posts/store', component: StorePostComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

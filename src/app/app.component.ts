import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '../../node_modules/@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  logIn = false;

  constructor(private router: Router, private route: ActivatedRoute ) {
  }
  newPost() {
    this.router.navigate(['posts/new']);
  }
}

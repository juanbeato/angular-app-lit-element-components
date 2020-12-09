import { Component } from '@angular/core';
import { Router } from '@angular/router';
import '@juanbeato/jb-layout';
import '@juanbeato/jb-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 

export class AppComponent {
  title = 'my-app-lit-components';
  menuItems: Object[];
  navigateMenuUrls: String[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = [
      {"text": "home", "icon": "home"},
      {"text": "books", "icon": "chrome-reader-mode"},
      {"text": "profile", "icon": "account-circle"}
    ];
    this.navigateMenuUrls = [
      'home',
      'books',
      'profile'
    ];
  }

  navigateFromMenu(e){
    const navigateUrl = this.navigateMenuUrls[e.detail];
    if (navigateUrl) {
      this.router.navigate([`/${navigateUrl}`]);
    }
  }
}

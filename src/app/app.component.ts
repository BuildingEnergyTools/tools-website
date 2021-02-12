import { Component } from '@angular/core';
import { Title as TitleService } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

import { appTitle, Constants } from '@shared/classes/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public router: Router,
    private titleService: TitleService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const prefix = event.urlAfterRedirects.replace(/^(\/.+?)(\/.*)/g, '$1');
        const title = Constants.titles[prefix];
        if (title) {
          titleService.setTitle(`${appTitle} | ${title}`);
        } else {
          titleService.setTitle(appTitle);
        }
      }
    });
  }
}

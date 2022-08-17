import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './better.component.html'
})
export class BetterComponent {
  readonly navItems: NavItem[] = [{
    title: 'BETTER',
    icon: 'fa-info-circle',
    route: '/better'
  }, {
    title: 'Goals & Outcomes',
    icon: 'fa-bullseye',
    route: 'goals'
  }, {
    title: 'Resources',
    icon: 'fa-file-alt',
    route: 'resources'
  }, {
    title: 'News',
    icon: 'fa-newspaper',
    fontAwesome: 'far',
    route: 'news'
  }, {
    title: 'Links for Developers',
    icon: 'fa-wrench',
    route: 'dev'
  }, {
    title: 'Get Help',
    icon: 'fa-comments',
    route: '/help-desk'
  }];

  constructor() {
  }

}

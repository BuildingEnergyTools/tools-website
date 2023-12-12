import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './seed.component.html'
})
export class SeedComponent {
  readonly navItems: NavItem[] = [{
    title: 'SEED Platform',
    icon: 'fa-info-circle',
    route: '/seed'
  }, {
    title: 'Resources',
    icon: 'fa-file-alt',
    route: 'resources'
  }, {
    title: 'Technical Allies',
    icon: 'fa-hands-helping',
    route: 'allies'
  }, {
    title: 'Links for Developers',
    icon: 'fa-wrench',
    route: 'dev'
  }, {
    title: 'FAQ',
    icon: 'fa-question-circle',
    route: 'faq'
  }, {
    title: 'News',
    icon: 'fa-newspaper',
    fontAwesome: 'far',
    route: 'news'
  }, {
    title: 'Get Help',
    icon: 'fa-comments',
    route: '/help-desk'
  }];
}

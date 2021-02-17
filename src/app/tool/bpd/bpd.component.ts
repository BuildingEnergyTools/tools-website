import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './bpd.component.html'
})
export class BpdComponent {
  readonly navItems: NavItem[] = [{
    title: 'BPD',
    icon: 'fa-info-circle',
    route: '/bpd'
  }, {
    title: 'About the Data',
    icon: 'fa-database',
    route: 'data'
  },{
    title: 'Privacy & Security',
    icon: 'fa-lock',
    route: 'security'
  },{
    title: 'Contribute Your Data',
    icon: 'fa-share',
    route: 'contribute'
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
    route: 'help'
  }];

  constructor() {
  }

}

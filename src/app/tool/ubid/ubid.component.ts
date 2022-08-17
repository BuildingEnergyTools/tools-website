import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './ubid.component.html'
})
export class UbidComponent {
  readonly navItems: NavItem[] = [{
    title: 'UBID',
    icon: 'fa-info-circle',
    route: '/ubid'
  }, {
    title: 'Resources',
    icon: 'fa-file-alt',
    route: 'resources'
  }, {
    title: 'Get Help',
    icon: 'fa-comments',
    route: '/help-desk'
  }];

  constructor() { }

}

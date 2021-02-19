import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './oep.component.html'
})
export class OepComponent {
  readonly navItems: NavItem[] = [{
    title: 'Open Efficiency Platform',
    icon: 'fa-info-circle',
    route: '/oep'
  }, {
    title: 'Pilots',
    icon: 'fa-map-marked-alt',
    route: 'pilots'
  }, {
    title: 'Resources',
    icon: 'fa-file-alt',
    route: 'resources'
  }, {
    title: 'Get Help',
    icon: 'fa-comments',
    route: 'help'
  }];

  constructor() {
  }

}

import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './goals.component.html'
})
export class GoalsComponent {
  readonly navItems: NavItem[] = [{
    title: 'Goals & Outcomes',
    icon: 'fa-info-circle',
    route: '/goals'
  }, {
    title: 'Analyze Building Stock',
    image: 'assets/images/com-resstock-outcomes-icon.svg',
    alt: '',
    route: 'analyze'
  }, {
    title: 'Target Efficiency Upgrade Areas',
    image: 'assets/images/better-outcomes-icon.svg',
    alt: '',
    route: 'target'
  }, {
    title: 'Achieve Compliance',
    image: 'assets/images/assetscore-outcomes-icon.svg',
    alt: '',
    route: 'compliance'
  }, {
    title: 'Customize Your Workflow',
    image: 'assets/images/thirdparty-outcomes-icon.svg',
    alt: '',
    route: 'customize'
  }];

  constructor() {
  }

}

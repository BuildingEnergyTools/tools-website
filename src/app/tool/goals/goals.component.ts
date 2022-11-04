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
    icon: 'assets/images/com-resstock-outcomes-icon.svg',
    route: 'analyze',
    local: true
  }, {
    title: 'Target Efficiency Upgrade Areas',
    icon: 'assets/images/better-outcomes-icon.svg',
    route: 'target',
    local: true
  }, {
    title: 'Achieve Compliance',
    icon: 'assets/images/assetscore-outcomes-icon.svg',
    route: 'compliance',
    local: true
  }, {
    title: 'Customize Your Workflow',
    icon: 'assets/images/thirdparty-outcomes-icon.svg',
    route: 'customize',
    local: true
  }];
}

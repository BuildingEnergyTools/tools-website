import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './asset-score.component.html'
})
export class AssetScoreComponent {
  readonly navItems: NavItem[] = [{
    title: 'Asset Score',
    icon: 'fa-info-circle',
    route: '/asset-score'
  }, {
    title: 'Goals & Outcomes',
    icon: 'fa-bullseye',
    route: 'goals'
  }, {
    title: 'Resources',
    icon: 'fa-file-alt',
    route: 'resources'
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

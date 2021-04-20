import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './third-party.component.html'
})
export class ThirdPartyComponent {
  readonly navItems: NavItem[] = [{
    title: 'Third-Party Tools',
    icon: 'fa-info-circle',
    route: '/third-party'
  }];

  constructor() {
  }

}

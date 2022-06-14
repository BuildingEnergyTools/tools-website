import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './bedes.component.html'
})
export class BedesComponent {
  readonly navItems: NavItem[] = [{
    title: 'BEDES',
    icon: 'fa-info-circle',
    route: '/bedes'
  },{
    title: 'BEDES Compliance',
    icon: 'fa-check-circle',
    route: 'compliance'
  },{
    title: 'Related Applications',
    icon: 'fa-window-restore',
    route: 'related'
  },{
    title: 'Resources',
    icon: 'fa-file-alt',
    route: 'resources'
  },{
    title: 'FAQ',
    icon: 'fa-question-circle',
    route: 'faq'
  },{
    title: 'Get Help',
    icon: 'fa-comments',
    route: '/help-desk'
  }];

  constructor() {
  }

}

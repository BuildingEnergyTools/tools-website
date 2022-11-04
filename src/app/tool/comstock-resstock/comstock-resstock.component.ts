import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './comstock-resstock.component.html'
})
export class ComstockResstockComponent {
  readonly navItems: NavItem[] = [{
    title: 'ComStock & ResStock',
    icon: 'fa-info-circle',
    route: '/comstock-resstock'
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
    route: '/help-desk'
  }];
}

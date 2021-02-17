import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './audit-template.component.html'
})
export class AuditTemplateComponent {
  readonly navItems: NavItem[] = [{
    title: 'Audit Template',
    icon: 'fa-info-circle',
    route: '/audit-template'
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

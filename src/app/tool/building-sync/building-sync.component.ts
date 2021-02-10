import { Component } from '@angular/core';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  templateUrl: './building-sync.component.html'
})
export class BuildingSyncComponent {
  readonly navItems: NavItem[] = [{
    title: 'BuildingSync',
    icon: 'fa-info-circle',
    route: '/building-sync'
  }, {
    title: 'Resources',
    icon: 'fa-file-alt',
    route: 'resources'
  }, {
    title: 'Collaborators & Adopters',
    icon: 'fa-hands-helping',
    route: 'collaborators'
  }, {
    title: 'Links for Developers',
    icon: 'fa-wrench',
    route: 'dev'
  }, {
    title: 'FAQ',
    icon: 'fa-question-circle',
    route: 'faq'
  }, {
    title: 'Get Help',
    icon: 'fa-comments',
    route: 'help'
  }];

  constructor() { }

}

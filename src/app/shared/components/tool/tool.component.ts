import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '@shared/interfaces/nav-item';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent {
  @Input()
  navItems: NavItem[] = [];

  @HostBinding('attr.data-color') color;

  constructor(private router: Router) {
    const prefix = router.url.replace(/^(\/.+?)(\/.*)/g, '$1');

    switch (prefix) {
      case '/audit-template':
        this.color = 1;
        break;
      case '/seed':
        this.color = 2;
        break;
      case '/asset-score':
      case '/better':
      case '/bpd':
      case '/comstock-resstock':
        this.color = 3;
        break;
      case '/goals':
        this.color = 4;
        break;
      case '/bedes':
      case '/building-sync':
      case '/oep':
      case '/third-party':
      case '/ubid':
        this.color = 5;
        break;
      default:
        console.warn(`Unexpected route: ${router.url}`);
    }
  }

}

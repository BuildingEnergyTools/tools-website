import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface NavItem {
  title: string;
  route: string;
  children?: ({
    title: string;
    route: string;
    external?: true;
  })[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  opened = false;
  readonly navItems: NavItem[];
  readonly flexWidth: number;

  constructor(private router: Router) {
    this.navItems = [{
      title: 'Data Collection & Reporting',
      route: '/collection-reporting',
      children: [{
        title: 'ENERGY STAR Portfolio Manager',
        route: 'https://www.energystar.gov/buildings/facility-owners-and-managers/existing-buildings/use-portfolio-manager',
        external: true
      }, {
        title: 'Building Energy Audit Template',
        route: '/audit-template'
      }]
    }, {
      title: 'Management & Compliance',
      route: '/management-compliance',
      children: [{
        title: 'SEED Platform',
        route: '/seed'
      }]
    }, {
      title: 'Analysis & Evaluation',
      route: '/analysis-evaluation',
      children: [{
        title: 'ComStock & ResStock',
        route: '/comstock-resstock'
      }, {
        title: 'BETTER',
        route: '/better'
      }, {
        title: 'Building Energy Asset Score',
        route: '/asset-score'
      }, {
        title: 'Building Performance Database',
        route: '/bpd'
      }]
    }, {
      title: 'Goals & Outcomes',
      route: '/goals-outcomes',
      children: [{
        title: 'Analyze Building Stock',
        route: '/goals/analyze'
      }, {
        title: 'Target Efficiency Upgrades',
        route: '/goals/target'
      }, {
        title: 'Achieve Compliance',
        route: '/goals/compliance'
      }, {
        title: 'Customize',
        route: '/goals/customize'
      }]
    }, {
      title: 'For Developers',
      route: '/developers',
      children: [{
        title: 'BuildingSync',
        route: '/building-sync'
      }, {
        title: 'UBID',
        route: '/ubid'
      }, {
        title: 'BEDES',
        route: '/bedes'
      }, {
        title: '3rd Party Tools',
        route: '/third-party'
      }]
    }];

    this.flexWidth = 100 / this.navItems.length;
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.opened = true;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.opened = false;
  }

  isParentActive(navItem: NavItem): boolean {
    if (navItem.route === this.router.url) {
      return true;
    }
    // Special cases
    if (navItem.route === '/goals-outcomes' && this.router.url === '/goals') {
      return true;
    }
    if (navItem.children) {
      return navItem.children.map(child => child.route).some(url => this.router.url.startsWith(url));
    }
    return false;
  }

}

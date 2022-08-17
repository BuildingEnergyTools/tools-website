import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BpdComponent } from './bpd.component';
import { DevComponent } from './dev/dev.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { FaqComponent } from './faq/faq.component';
import { DataComponent } from './data/data.component';
import { ContributeComponent } from './contribute/contribute.component';
import { SecurityComponent } from './security/security.component';

const routes: Routes = [{
  path: '',
  component: BpdComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'data',
    component: DataComponent
  },{
    path: 'security',
    component: SecurityComponent
  },{
    path: 'contribute',
    component: ContributeComponent
  }, {
    path: 'faq',
    component: FaqComponent
  }, {
    path: 'resources',
    component: ResourcesComponent
  }, {
    path: 'dev',
    component: DevComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BpdRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedesComponent } from './bedes.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { RelatedComponent } from './related/related.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [{
  path: '',
  component: BedesComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'compliance',
    component: ComplianceComponent
  }, {
    path: 'related',
    component: RelatedComponent
  }, {
    path: 'resources',
    component: ResourcesComponent
  }, {
    path: 'faq',
    component: FaqComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BedesRoutingModule {
}

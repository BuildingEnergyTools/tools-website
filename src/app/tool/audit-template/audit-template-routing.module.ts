import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditTemplateComponent } from './audit-template.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [{
  path: '',
  component: AuditTemplateComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'resources',
    component: ResourcesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditTemplateRoutingModule {
}

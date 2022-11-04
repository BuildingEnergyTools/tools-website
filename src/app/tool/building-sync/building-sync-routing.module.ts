import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildingSyncComponent } from './building-sync.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { DevComponent } from './dev/dev.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [{
  path: '',
  component: BuildingSyncComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'resources',
    component: ResourcesComponent
  }, {
    path: 'collaborators',
    component: CollaboratorsComponent
  }, {
    path: 'dev',
    component: DevComponent
  }, {
    path: 'faq',
    component: FaqComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingSyncRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { ThirdPartyComponent } from './third-party.component';

const routes: Routes = [{
  path: '',
  component: ThirdPartyComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'resources',
    component: ResourcesComponent
  }, {
    path: 'help',
    component: HelpComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdPartyRoutingModule { }

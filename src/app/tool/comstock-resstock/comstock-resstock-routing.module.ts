import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComstockResstockComponent } from './comstock-resstock.component';
import { DevComponent } from './dev/dev.component';
import { GoalsComponent } from './goals/goals.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [{
  path: '',
  component: ComstockResstockComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'goals',
    component: GoalsComponent
  }, {
    path: 'resources',
    component: ResourcesComponent
  }, {
    path: 'dev',
    component: DevComponent
  }, {
    path: 'help',
    component: HelpComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComstockResstockRoutingModule { }

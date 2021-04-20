import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { PilotsComponent } from './pilots/pilots.component';
import { OepComponent } from './oep.component';

const routes: Routes = [{
  path: '',
  component: OepComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'pilots',
    component: PilotsComponent
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
export class OepRoutingModule { }

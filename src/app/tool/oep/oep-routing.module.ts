import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OepComponent } from './oep.component';
import { PilotsComponent } from './pilots/pilots.component';
import { ResourcesComponent } from './resources/resources.component';

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
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OepRoutingModule {
}

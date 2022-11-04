import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThirdPartyComponent } from './third-party.component';

const routes: Routes = [{
  path: '',
  component: ThirdPartyComponent,
  children: [{
    path: '',
    component: HomeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdPartyRoutingModule {
}

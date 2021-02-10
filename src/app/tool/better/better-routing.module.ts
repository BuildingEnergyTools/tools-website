import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetterComponent } from './better.component';
import { DevComponent } from './dev/dev.component';
import { GoalsComponent } from './goals/goals.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [{
  path: '',
  component: BetterComponent,
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
    path: 'news',
    component: NewsComponent
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
export class BetterRoutingModule {
}

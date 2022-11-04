import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlliesComponent } from './allies/allies.component';
import { DevComponent } from './dev/dev.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ResourcesComponent } from './resources/resources.component';
import { SeedComponent } from './seed.component';

const routes: Routes = [{
  path: '',
  component: SeedComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'resources',
    component: ResourcesComponent
  }, {
    path: 'allies',
    component: AlliesComponent
  }, {
    path: 'dev',
    component: DevComponent
  }, {
    path: 'faq',
    component: FaqComponent
  }, {
    path: 'news',
    component: NewsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeedRoutingModule {
}

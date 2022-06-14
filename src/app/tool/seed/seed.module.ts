import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AlliesComponent } from './allies/allies.component';
import { DevComponent } from './dev/dev.component';
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';
import { ResourcesComponent } from './resources/resources.component';
import { SeedRoutingModule } from './seed-routing.module';
import { SeedComponent } from './seed.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AlliesComponent,
    DevComponent,
    FaqComponent,
    NewsComponent,
    ResourcesComponent,
    SeedComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SeedRoutingModule,
    SharedModule
  ]
})
export class SeedModule {
}

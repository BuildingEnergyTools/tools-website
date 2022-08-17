import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { BetterRoutingModule } from './better-routing.module';
import { BetterComponent } from './better.component';
import { DevComponent } from './dev/dev.component';
import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    BetterComponent,
    DevComponent,
    GoalsComponent,
    HomeComponent,
    NewsComponent,
    ResourcesComponent
  ],
  imports: [
    BetterRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BetterModule {
}

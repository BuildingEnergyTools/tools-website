import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AssetScoreRoutingModule } from './asset-score-routing.module';
import { AssetScoreComponent } from './asset-score.component';
import { DevComponent } from './dev/dev.component';
import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    AssetScoreComponent,
    DevComponent,
    GoalsComponent,
    HomeComponent,
    ResourcesComponent
  ],
  imports: [
    AssetScoreRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AssetScoreModule {
}

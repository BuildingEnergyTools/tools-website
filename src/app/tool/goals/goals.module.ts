import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AnalyzeComponent } from './analyze/analyze.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { CustomizeComponent } from './customize/customize.component';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { HomeComponent } from './home/home.component';
import { TargetComponent } from './target/target.component';


@NgModule({
  declarations: [
    AnalyzeComponent,
    ComplianceComponent,
    CustomizeComponent,
    GoalsComponent,
    HomeComponent,
    TargetComponent
  ],
  imports: [
    CommonModule,
    GoalsRoutingModule,
    SharedModule
  ]
})
export class GoalsModule {
}

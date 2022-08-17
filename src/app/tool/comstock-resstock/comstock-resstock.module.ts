import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { ComstockResstockRoutingModule } from './comstock-resstock-routing.module';
import { ComstockResstockComponent } from './comstock-resstock.component';
import { DevComponent } from './dev/dev.component';
import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [
    ComstockResstockComponent,
    DevComponent,
    GoalsComponent,
    HomeComponent,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    ComstockResstockRoutingModule,
    SharedModule
  ]
})
export class ComstockResstockModule {
}

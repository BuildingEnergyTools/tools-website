import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ResourcesComponent } from './resources/resources.component';
import { PilotsComponent } from './pilots/pilots.component';
import { OepRoutingModule } from './oep-routing.module';
import { OepComponent } from './oep.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ResourcesComponent,
    OepComponent,
    PilotsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    OepRoutingModule,
    SharedModule
  ]
})
export class OepModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { UbidRoutingModule } from './ubid-routing.module';
import { UbidComponent } from './ubid.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [
    HelpComponent,
    HomeComponent,
    ResourcesComponent,
    UbidComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UbidRoutingModule
  ]
})
export class UbidModule { }

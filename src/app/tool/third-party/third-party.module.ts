import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ThirdPartyRoutingModule } from './third-party-routing.module';
import { ThirdPartyComponent } from './third-party.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    HelpComponent,
    HomeComponent,
    ResourcesComponent,
    ThirdPartyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThirdPartyRoutingModule
  ]
})
export class ThirdPartyModule { }

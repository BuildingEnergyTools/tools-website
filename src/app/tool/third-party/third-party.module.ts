import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ThirdPartyRoutingModule } from './third-party-routing.module';
import { ThirdPartyComponent } from './third-party.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    ThirdPartyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThirdPartyRoutingModule
  ]
})
export class ThirdPartyModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ThirdPartyRoutingModule } from './third-party-routing.module';
import { ThirdPartyComponent } from './third-party.component';

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
export class ThirdPartyModule {
}

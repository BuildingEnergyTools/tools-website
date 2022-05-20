import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { BpdRoutingModule } from './bpd-routing.module';
import { BpdComponent } from './bpd.component';
import { DevComponent } from './dev/dev.component';
import { DataComponent } from './data/data.component';
import { SecurityComponent } from './security/security.component';
import { ContributeComponent } from './contribute/contribute.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    BpdComponent,
    DataComponent,
    SecurityComponent,
    ContributeComponent,
    DevComponent,
    HomeComponent,
    ResourcesComponent,
    FaqComponent
  ],
  imports: [
    BpdRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BpdModule {
}

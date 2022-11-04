import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { BpdRoutingModule } from './bpd-routing.module';
import { BpdComponent } from './bpd.component';
import { ContributeComponent } from './contribute/contribute.component';
import { DataComponent } from './data/data.component';
import { DevComponent } from './dev/dev.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    BpdComponent,
    ContributeComponent,
    DataComponent,
    DevComponent,
    FaqComponent,
    HomeComponent,
    ResourcesComponent,
    SecurityComponent
  ],
  imports: [
    BpdRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BpdModule {
}

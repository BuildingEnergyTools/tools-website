import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { BedesRoutingModule } from './bedes-routing.module';
import { BedesComponent } from './bedes.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { RelatedComponent } from './related/related.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    BedesComponent,
    ComplianceComponent,
    FaqComponent,
    HomeComponent,
    RelatedComponent,
    ResourcesComponent
  ],
  imports: [
    BedesRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class BedesModule {
}

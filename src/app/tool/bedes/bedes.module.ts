import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { BedesRoutingModule } from './bedes-routing.module';
import { BedesComponent } from './bedes.component';
import { RelatedComponent } from './related/related.component';
import { TermsComponent } from './terms/terms.component';
import { FaqComponent } from './faq/faq.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [
    BedesComponent,
    RelatedComponent,
    DocumentationComponent,
    TermsComponent,
    FaqComponent,
    HelpComponent,
    HomeComponent,
    ComplianceComponent,
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

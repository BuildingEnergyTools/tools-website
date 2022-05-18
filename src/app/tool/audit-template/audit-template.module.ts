import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { AuditTemplateRoutingModule } from './audit-template-routing.module';
import { AuditTemplateComponent } from './audit-template.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AuditTemplateComponent,
    ResourcesComponent,
    HomeComponent
  ],
  imports: [
    AuditTemplateRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AuditTemplateModule {
}

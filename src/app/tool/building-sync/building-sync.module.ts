import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { BuildingSyncRoutingModule } from './building-sync-routing.module';
import { BuildingSyncComponent } from './building-sync.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { DevComponent } from './dev/dev.component';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';


@NgModule({
  declarations: [
    BuildingSyncComponent,
    CollaboratorsComponent,
    DevComponent,
    FaqComponent,
    HelpComponent,
    HomeComponent,
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    BuildingSyncRoutingModule,
    SharedModule
  ]
})
export class BuildingSyncModule { }

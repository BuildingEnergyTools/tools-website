import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { MaterialModule } from './modules/material.module';
import { ToolComponent } from './components/tool/tool.component';

@NgModule({
  declarations: [
    ToolComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HammerModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    MaterialModule,
    OverlayscrollbarsModule,
    RouterModule
  ],
  exports: [
    FlexLayoutModule,
    HammerModule,
    MaterialModule,
    ToolComponent
  ]
})
export class SharedModule {
}

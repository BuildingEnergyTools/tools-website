import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
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
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    MaterialModule,
    RouterModule
  ],
  exports: [
    FlexLayoutModule,
    HammerModule,
    MarkdownModule,
    MaterialModule,
    ToolComponent
  ]
})
export class SharedModule {
}

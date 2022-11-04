import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { ExternalLinkDirective, isLinkExternal } from '@shared/directives/external-link.directive';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { ToolComponent } from './components/tool/tool.component';
import { MaterialModule } from './modules/material.module';

const markedOptionsFactory = (): MarkedOptions => {
  const renderer = new MarkedRenderer();
  const linkRenderer = renderer.link;

  // Remove header ids that are sanitized-out anyway
  renderer.heading = (text, level) => `<h${level}>${text}</h${level}>`;

  // Add attributes for external links
  renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return isLinkExternal(href) ? html.replace(/^<a /, '<a target="_blank" rel="noopener" class="external" ') : html;
  };

  return {renderer};
};

@NgModule({
  declarations: [
    ExternalLinkDirective,
    ToolComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HammerModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory
      }
    }),
    MaterialModule,
    RouterModule
  ],
  exports: [
    ExternalLinkDirective,
    FlexLayoutModule,
    HammerModule,
    MarkdownModule,
    MaterialModule,
    ToolComponent
  ]
})
export class SharedModule {
}

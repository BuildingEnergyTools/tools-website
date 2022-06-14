import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GraphicComponent } from './home/graphic/graphic.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AnalysisEvaluationComponent } from './tools-overview/analysis-evaluation/analysis-evaluation.component';
import { CollectionReportingComponent } from './tools-overview/collection-reporting/collection-reporting.component';
import { DataStandardizationComponent } from './tools-overview/data-standardization/data-standardization.component';
import { DevelopersComponent } from './tools-overview/developers/developers.component';
import { GoalsOutcomesComponent } from './tools-overview/goals-outcomes/goals-outcomes.component';
import { HelpDeskComponent } from './tools-overview/help-desk/help-desk.component';
import { ManagementComplianceComponent } from './tools-overview/management-compliance/management-compliance.component';
import { ToolsOverviewComponent } from './tools-overview/tools-overview.component';

@NgModule({
  declarations: [
    AnalysisEvaluationComponent,
    AppComponent,
    CollectionReportingComponent,
    DataStandardizationComponent,
    DevelopersComponent,
    FooterComponent,
    GoalsOutcomesComponent,
    GraphicComponent,
    HeaderComponent,
    HelpDeskComponent,
    HomeComponent,
    ManagementComplianceComponent,
    MenuComponent,
    ToolsOverviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaFormsModule,
    RecaptchaModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
})
export class AppModule {
}

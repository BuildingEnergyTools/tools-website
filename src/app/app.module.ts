import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AnalysisEvaluationComponent } from './tools-overview/analysis-evaluation/analysis-evaluation.component';
import { CollectionReportingComponent } from './tools-overview/collection-reporting/collection-reporting.component';
import { DevelopersComponent } from './tools-overview/developers/developers.component';
import { GoalsOutcomesComponent } from './tools-overview/goals-outcomes/goals-outcomes.component';
import { ManagementComplianceComponent } from './tools-overview/management-compliance/management-compliance.component';
import { ToolsOverviewComponent } from './tools-overview/tools-overview.component';

@NgModule({
  declarations: [
    AnalysisEvaluationComponent,
    AppComponent,
    CollectionReportingComponent,
    DevelopersComponent,
    FooterComponent,
    GoalsOutcomesComponent,
    HeaderComponent,
    HomeComponent,
    ManagementComplianceComponent,
    MenuComponent,
    ToolsOverviewComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

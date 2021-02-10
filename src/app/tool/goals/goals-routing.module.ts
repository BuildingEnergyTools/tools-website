import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzeComponent } from './analyze/analyze.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { CustomizeComponent } from './customize/customize.component';
import { GoalsComponent } from './goals.component';
import { HomeComponent } from './home/home.component';
import { TargetComponent } from './target/target.component';

const routes: Routes = [{
  path: '',
  component: GoalsComponent,
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'analyze',
    component: AnalyzeComponent
  }, {
    path: 'target',
    component: TargetComponent
  }, {
    path: 'compliance',
    component: ComplianceComponent
  }, {
    path: 'customize',
    component: CustomizeComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule {
}

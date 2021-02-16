import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnalysisEvaluationComponent } from './tools-overview/analysis-evaluation/analysis-evaluation.component';
import { CollectionReportingComponent } from './tools-overview/collection-reporting/collection-reporting.component';
import { DevelopersComponent } from './tools-overview/developers/developers.component';
import { GoalsOutcomesComponent } from './tools-overview/goals-outcomes/goals-outcomes.component';
import { ManagementComplianceComponent } from './tools-overview/management-compliance/management-compliance.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'collection-reporting',
  component: CollectionReportingComponent
}, {
  path: 'audit-template',
  loadChildren: () => import(/* webpackChunkName: "audit-template" */ './tool/audit-template/audit-template.module').then(m => m.AuditTemplateModule)
}, {
  path: 'management-compliance',
  component: ManagementComplianceComponent
}, {
  path: 'seed',
  loadChildren: () => import(/* webpackChunkName: "seed" */ './tool/seed/seed.module').then(m => m.SeedModule)
}, {
  path: 'analysis-evaluation',
  component: AnalysisEvaluationComponent
}, {
  path: 'comstock-resstock',
  loadChildren: () => import(/* webpackChunkName: "comstock-resstock" */ './tool/comstock-resstock/comstock-resstock.module').then(m => m.ComstockResstockModule)
}, {
  path: 'better',
  loadChildren: () => import(/* webpackChunkName: "better" */ './tool/better/better.module').then(m => m.BetterModule)
}, {
  path: 'asset-score',
  loadChildren: () => import(/* webpackChunkName: "asset-score" */ './tool/asset-score/asset-score.module').then(m => m.AssetScoreModule)
}, {
  path: 'bpd',
  loadChildren: () => import(/* webpackChunkName: "bpd" */ './tool/bpd/bpd.module').then(m => m.BpdModule)
}, {
  path: 'goals-outcomes',
  component: GoalsOutcomesComponent
}, {
  path: 'goals',
  loadChildren: () => import(/* webpackChunkName: "goals" */ './tool/goals/goals.module').then(m => m.GoalsModule)
}, {
  path: 'developers',
  component: DevelopersComponent
}, {
  path: 'building-sync',
  loadChildren: () => import(/* webpackChunkName: "building-sync" */ './tool/building-sync/building-sync.module').then(m => m.BuildingSyncModule)
}, {
  path: 'ubid',
  loadChildren: () => import(/* webpackChunkName: "ubid" */ './tool/ubid/ubid.module').then(m => m.UbidModule)
}, {
  path: 'third-party',
  loadChildren: () => import(/* webpackChunkName: "third-party" */ './tool/third-party/third-party.module').then(m => m.ThirdPartyModule)
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

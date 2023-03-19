import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'repositories',
    loadChildren: () => import('./repositories/repositories.module').then( m => m.RepositoriesPageModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./introduction/introduction.module').then( m => m.IntroductionPageModule)
  },
  {
    path: 'domains',
    loadChildren: () => import('./domains/domains.module').then( m => m.DomainsPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'integrating',
    loadChildren: () => import('./integrating/integrating.module').then( m => m.IntegratingPageModule)
  },
  {
    path: 'architecture',
    loadChildren: () => import('./architecture/architecture.module').then( m => m.ArchitecturePageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./application/application.module').then( m => m.ApplicationPageModule)
  },
  {
    path: 'presentation',
    loadChildren: () => import('./presentation/presentation.module').then( m => m.PresentationPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('./bookmarks/bookmarks.module').then( m => m.BookmarksPageModule)
  },
  {
    path: 'base',
    loadChildren: () => import('./base/base.module').then( m => m.BasePageModule)
  },
  {
    path: 'takenotes',
    loadChildren: () => import('./takenotes/takenotes.module').then( m => m.TakenotesPageModule)
  },
  {
    path: 'context',
    loadChildren: () => import('./context/context.module').then( m => m.ContextPageModule)
  },
  {
    path: 'entities',
    loadChildren: () => import('./entities/entities.module').then( m => m.EntitiesPageModule)
  },
  {
    path: 'vos',
    loadChildren: () => import('./vos/vos.module').then( m => m.VosPageModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('./modules/modules.module').then( m => m.ModulesPageModule)
  },
  {
    path: 'aggregates',
    loadChildren: () => import('./aggregates/aggregates.module').then( m => m.AggregatesPageModule)
  },
  {
    path: 'factories',
    loadChildren: () => import('./factories/factories.module').then( m => m.FactoriesPageModule)
  },
  {
    path: 'prospecting',
    loadChildren: () => import('./prospecting/prospecting.module').then( m => m.ProspectingPageModule)
  },
  {
    path: 'rests',
    loadChildren: () => import('./rests/rests.module').then( m => m.RestsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

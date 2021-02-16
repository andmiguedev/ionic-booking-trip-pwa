import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsNavigationPage } from './tabs-navigation/tabs-navigation-page';

const routes: Routes = [
  {
    path: '',
    component: TabsNavigationPage,
    children: [
      {
        path: 'flights',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../flights/flights.module').then((m) => m.FlightsModule),
          },
          {
            path: 'flights/flights-search',
            loadChildren: () =>
              import('../flights/flights-search/flights-search.module').then(
                (m) => m.FlightsSearchPageModule
              ),
          },
        ],
      },
      {
        path: 'shared',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shared/shared.module').then((m) => m.SharedModule),
          },
          {
            path: 'shared/incentives',
            loadChildren: () =>
              import('../shared/incentives/incentives.module').then(
                (m) => m.IncentivesPageModule
              ),
          },
        ],
      },
      {
        path: 'cruises',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cruises/cruises.module').then((m) => m.CruisesModule),
          },
          {
            path: 'cruises/cruise-search',
            loadChildren: () =>
              import('../cruises/cruises-search/cruises-search.module').then(
                (m) => m.CruisesSearchPageModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'navigation/flights/flights-search',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'navigation/shared/incentives',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'navigation/cruises/cruises-search',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsNavigationRoutingModule {}

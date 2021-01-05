import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "walkthrough",
    pathMatch: "full",
  },
  {
    path: "walkthrough",
    loadChildren: () =>
      import("./pages/walkthrough/walkthrough.module").then(
        (m) => m.WalkthroughPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "deals",
    loadChildren: () =>
      import("./pages/deals/deals.module").then((m) => m.DealsPageModule),
  },
  {
    path: "search-flights",
    loadChildren: () =>
      import("./pages/search-flights/search-flights.module").then(
        (m) => m.SearchFlightsPageModule
      ),
  },
  {
    path: "pick-location",
    loadChildren: () =>
      import("./pages/shared/pick-location/pick-location.module").then(
        (m) => m.PickLocationPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

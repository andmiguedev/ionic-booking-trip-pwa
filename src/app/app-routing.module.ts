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
      import("./screens/walkthrough/walkthrough.module").then(
        (m) => m.WalkthroughPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./screens/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./screens/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "deals",
    loadChildren: () =>
      import("./screens/deals/deals.module").then((m) => m.DealsPageModule),
  },
  {
    path: "search-flights",
    loadChildren: () =>
      import("./screens/search-flights/search-flights.module").then(
        (m) => m.SearchFlightsPageModule
      ),
  },
  {
    path: "pick-location",
    loadChildren: () =>
      import("./screens/shared/pick-location/pick-location.module").then(
        (m) => m.PickLocationPageModule
      ),
  },
  {
    path: "departing-results",
    loadChildren: () =>
      import("./screens/departing-results/departing-results.module").then(
        (m) => m.DepartingResultsPageModule
      ),
  },
  {
    path: "returning-results",
    loadChildren: () =>
      import("./screens/returning-results/returning-results.module").then(
        (m) => m.ReturningResultsPageModule
      ),
  },
  {
    path: "flight-information",
    loadChildren: () =>
      import("./screens/flight-information/flight-information.module").then(
        (m) => m.FlightInformationPageModule
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

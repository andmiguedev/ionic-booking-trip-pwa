import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UpdateInformationPage } from "./update-information/update-information.page";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "update-info",
        component: UpdateInformationPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProfileRoutingModule {}

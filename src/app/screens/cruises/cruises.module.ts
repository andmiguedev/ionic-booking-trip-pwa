import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CruisesRoutingModule } from "./cruises-routing.module";
import { CruisesSearchPage } from "./cruises-search/cruises-search.page";

@NgModule({
  declarations: [CruisesSearchPage],
  imports: [CommonModule, CruisesRoutingModule],
  providers: [],
})
export class CruisesModule {}

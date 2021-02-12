import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";

import { TabsNavigationRoutingModule } from "./navigation-routing.module";
import { TabsNavigationPage } from "./tabs-navigation/tabs-navigation-page";

@NgModule({
  imports: [CommonModule, IonicModule, TabsNavigationRoutingModule],
  declarations: [TabsNavigationPage],
})
export class NavigationModule {}

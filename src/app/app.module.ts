import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { handleAuthHttpRequests } from "./services/storage/account/auth.requests";
import { initFacebookSDK } from "./services/auth/facebook/initializeSDK";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { IonicStorageModule } from "@ionic/storage";

import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { SidedrawerMenuComponent } from "./components/menus/sidedrawer-menu/sidedrawer-menu.component";

@NgModule({
  declarations: [AppComponent, SidedrawerMenuComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    handleAuthHttpRequests,
    initFacebookSDK,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

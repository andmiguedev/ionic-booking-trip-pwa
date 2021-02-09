import { APP_INITIALIZER } from "@angular/core";

import { FacebookService } from "./facebook.service";
import { environment } from "../../../../environments/environment";

export function initializeSDK(facebookService: FacebookService) {
  return () =>
    new Promise((resolve) => {
      // IMPORTANT: Facebook Auth SDK needs to be initialized
      // before the Progressive Web Application is loading
      window["fbAsyncInit"] = function () {
        FB.init({
          appId: environment.facebookAppId,
          cookie: true,
          xfbml: true,
          version: "v8.0",
        });

        // Request User to authenticate if token has expired
        FB.getLoginStatus(({ authResponse }) => {
          if (authResponse) {
            facebookService
              .AuthenticateUser(authResponse.accessToken)
              .subscribe()
              .add(resolve);
          } else {
            resolve();
          }
        });
      };

      // Load propietary Facebook SDK Script
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    });
}

export const initFacebookSDK = {
  provide: APP_INITIALIZER,
  useFactory: initializeSDK,
  multi: true,
  deps: [FacebookService],
};

import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  NavController,
  LoadingController,
} from "@ionic/angular";

import { Storage } from "@ionic/storage";
import { PickLocationPage } from "../../shared/pick-location/pick-location.page";

@Component({
  selector: "app-flights-search",
  templateUrl: "./flights-search.page.html",
  styleUrls: ["./flights-search.page.scss"],
})
export class FlightsSearchPage implements OnInit {
  public oneWayTicket: any = false;
  public layoverTicket: any = false;

  // Schema for one way trip
  public searchLocation: any = {
    departure: "Fort Lauderdale, United States",
    layover: "Stop Location",
    arrival: "Any Location",
    origin: new Date().toISOString(),
    stop: new Date().toISOString(),
    destination: new Date().toISOString(),
  };

  constructor(
    private storage: Storage,
    private modalController: ModalController,
    private navController: NavController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getTravelLocation();
  }

  getTravelLocation() {
    this.storage
      .get("departure")
      .then((pickedValue) => {
        if (pickedValue !== null) {
          this.searchLocation.departure = pickedValue;
        }
      })
      .catch((notifyError) => {
        console.error(notifyError);
      });

    this.storage
      .get("arrival")
      .then((pickedValue) => {
        if (pickedValue !== null) {
          this.searchLocation.arrival = pickedValue;
        }
      })
      .catch((notifyError) => {
        console.error(notifyError);
      });
  }

  async chooseLocation(place: string) {
    const modal = await this.modalController.create({
      component: PickLocationPage,
      componentProps: {
        place: place,
        searchLocation: this.searchLocation,
      },
    });

    return await modal.present();
  }

  async findItineraries() {
    const loader = await this.loadingController.create({
      message: "Searching...",
      duration: 1000,
    });
    loader.present();
    loader.onWillDismiss().then(() => {
      this.navController.navigateForward("/flights/flights-departing");
    });
  }
}

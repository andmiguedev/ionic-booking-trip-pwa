import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  NavController,
  LoadingController,
} from "@ionic/angular";

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
  public sampleLocation: any = {
    recent: "Miami, United States",
    departure: "Same as departure",
    origin: new Date().toISOString(),
    stop: new Date().toISOString(),
    destination: new Date().toISOString(),
  };

  constructor(
    private modalController: ModalController,
    private navController: NavController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {}

  async chooseLocation(place: string) {
    const modal = await this.modalController.create({
      component: PickLocationPage,
      componentProps: {
        place,
        search: this.sampleLocation,
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

import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  NavController,
  LoadingController,
} from "@ionic/angular";

import { PickLocationPage } from "../shared/pick-location/pick-location.page";

@Component({
  selector: "app-search-flights",
  templateUrl: "./search-flights.page.html",
  styleUrls: ["./search-flights.page.scss"],
})
export class SearchFlightsPage implements OnInit {
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
      duration: 1000,
    });
    loader.present();
    loader.onWillDismiss().then(() => {
      this.navController.navigateForward("/departing-results");
    });
  }
}

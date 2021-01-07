import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";

import { PickLocationPage } from "../shared/pick-location/pick-location.page";

@Component({
  selector: "app-search-flights",
  templateUrl: "./search-flights.page.html",
  styleUrls: ["./search-flights.page.scss"],
})
export class SearchFlightsPage implements OnInit {
  // Schema for one way trip
  public sampleLocation: any = {
    recent: "Miami, United States",
    departure: "Same as departure",
    origin: new Date().toISOString(),
    destination: new Date().toISOString(),
  };

  constructor(
    private modalController: ModalController,
    private navController: NavController
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

  searchItineraries() {
    this.navController.navigateForward("/departing-results");
  }
}

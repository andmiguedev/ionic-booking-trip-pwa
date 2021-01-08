import { NavController } from "@ionic/angular";
import { Component } from "@angular/core";
import { ItinerariesService } from "./../../services/data/itineraries/itineraries.service";

@Component({
  selector: "app-departing-results",
  templateUrl: "./departing-results.page.html",
  styleUrls: ["./departing-results.page.scss"],
})
export class DepartingResultsPage {
  public departureResults: any;

  constructor(
    private itinerariesService: ItinerariesService,
    private navController: NavController
  ) {
    this.departureResults = this.itinerariesService.getAllItineraries();
  }

  lookReturningFlights() {
    this.navController.navigateForward("/returning-results");
  }
}

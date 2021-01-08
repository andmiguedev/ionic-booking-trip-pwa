import { Component } from "@angular/core";
import { ItinerariesService } from "./../../services/data/itineraries/itineraries.service";

@Component({
  selector: "app-departing-results",
  templateUrl: "./departing-results.page.html",
  styleUrls: ["./departing-results.page.scss"],
})
export class DepartingResultsPage {
  public departureResults: any;

  constructor(private itinerariesService: ItinerariesService) {
    this.departureResults = this.itinerariesService.getAllItineraries();
  }
}

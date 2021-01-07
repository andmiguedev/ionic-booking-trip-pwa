import { ItinerariesService } from "./../../services/data/itineraries/itineraries.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-departing-results",
  templateUrl: "./departing-results.page.html",
  styleUrls: ["./departing-results.page.scss"],
})
export class DepartingResultsPage {
  public itineraryResults: any;

  constructor(private itineraryService: ItinerariesService) {
    this.itineraryResults = this.itineraryService.getAllItineraries();
  }
}

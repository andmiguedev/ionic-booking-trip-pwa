import { DeparturesService } from "./../../services/data/departures/departures.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-departing-results",
  templateUrl: "./departing-results.page.html",
  styleUrls: ["./departing-results.page.scss"],
})
export class DepartingResultsPage {
  public departureResults: any;

  constructor(private departuresService: DeparturesService) {
    this.departureResults = this.departuresService.getRecentDepartures();
  }
}

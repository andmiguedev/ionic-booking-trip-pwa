import { Component } from "@angular/core";
import { ItinerariesService } from "./../../services/data/itineraries/itineraries.service";

@Component({
  selector: "app-returning-results",
  templateUrl: "./returning-results.page.html",
  styleUrls: ["./returning-results.page.scss"],
})
export class ReturningResultsPage {
  public arrivalResults: any;

  constructor(private itinerariesService: ItinerariesService) {
    this.arrivalResults = this.itinerariesService.getAllItineraries();
  }

  ngOnInit() {}
}

import { Component } from "@angular/core";
import { ItinerariesService } from "./../../../services/data/itineraries/itineraries.service";

@Component({
  selector: "app-flights-returning",
  templateUrl: "./flights-returning.page.html",
  styleUrls: ["./flights-returning.page.scss"],
})
export class FlightsReturningPage {
  public arrivalResults: any;

  constructor(private itinerariesService: ItinerariesService) {
    this.arrivalResults = this.itinerariesService.getAllItineraries();
  }

  ngOnInit() {}
}

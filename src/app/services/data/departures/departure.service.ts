import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DepartureService {
  departure: any;

  setDeparture(departure) {
    this.departure = departure;
  }

  getDeparture() {
    return this.departure;
  }
}

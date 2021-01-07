import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DepartureService {
  departure: any;

  setDepartureSchema(departure) {
    this.departure = departure;
  }

  getDepartureSchema() {
    return this.departure;
  }
}

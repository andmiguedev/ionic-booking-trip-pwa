import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ArrivalService {
  arrival: any;

  setArrival(arrival) {
    this.arrival = arrival;
  }

  getArrival() {
    return this.arrival;
  }
}

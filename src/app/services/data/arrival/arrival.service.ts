import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ArrivalService {
  arrival: any;

  setArrivalSchema(arrival) {
    this.arrival = arrival;
  }

  getArrivalSchema() {
    return this.arrival;
  }
}

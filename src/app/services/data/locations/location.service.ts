import { Injectable } from "@angular/core";
import { Location } from "../../../models/interfaces/location.interface";
import { CITIES } from "./major-cities";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  locations: any;
  locationCities: Array<Location> = [];

  constructor() {
    this.locations = CITIES;
  }

  getAllLocations() {
    return this.locations;
  }
}

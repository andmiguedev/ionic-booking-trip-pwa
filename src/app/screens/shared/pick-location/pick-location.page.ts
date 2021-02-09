import { LocationService } from "./../../../services/data/locations/location.service";
import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "pick-location",
  templateUrl: "./pick-location.page.html",
  styleUrls: ["./pick-location.page.scss"],
})
export class PickLocationPage implements OnInit {
  @Input() place: any;
  @Input() searchLocation: any;

  location: any = {
    recent: [
      {
        id: 1,
        name: "Fort Lauderdale, United States",
      },
    ],
  };

  searchResults: any;

  constructor(
    private locationService: LocationService,
    private storage: Storage,
    private modalController: ModalController
  ) {
    this.searchResults = this.locationService.getAllLocations();
  }

  ngOnInit() {
    console.log(this.place);
    // this.searchResults = this.locations.placesList;
  }

  filterByLetters(event: any) {
    // Process search bar keyboard event
    let fetchValue = event ? event.target.value : "";

    // If the value entered is not found or empty
    if (fetchValue && fetchValue.trim() != "") {
      this.searchResults = this.locationService
        .getAllLocations()
        .filter((place) => {
          // Show location places that match search term
          return (
            place.name.toLowerCase().indexOf(fetchValue.toLowerCase()) > -1
          );
        });
    } else {
      // Show all locations available in local storage
      this.searchResults = this.locationService.getAllLocations();
    }
  }

  pickLocation(city) {
    if (this.place === "origin") {
      this.storage.set("departure", city.name);
      this.searchLocation.departure = `${city.name}, ${city.state}`;
    }

    if (this.place === "destination") {
      this.storage.set("arrival", city.name);
      this.searchLocation.arrival = `${city.name}, ${city.state}`;
    }

    this.modalController.dismiss();
  }

  closeSearchBar() {
    this.modalController.dismiss();
  }
}

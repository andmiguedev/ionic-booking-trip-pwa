import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "pick-location",
  templateUrl: "./pick-location.page.html",
  styleUrls: ["./pick-location.page.scss"],
})
export class PickLocationPage implements OnInit {
  // Type assertion not defined
  @Input() place: any;
  @Input() searchLocation: any;

  locations: any = {
    placesList: [
      {
        id: 1,
        name: "Current location",
      },
      {
        id: 2,
        name: "San Juan, Puerto Rico",
      },
      {
        id: 3,
        name: "Buenos Aires, Argentina",
      },
      {
        id: 4,
        name: "Rome, Italy",
      },
      {
        id: 5,
        name: "Miami, United States",
      },
      {
        id: 6,
        name: "New York, United States",
      },
      {
        id: 7,
        name: "Paris, France",
      },
      {
        id: 8,
        name: "Munich, Germany",
      },
      {
        id: 9,
        name: "Manchester, United Kingdom",
      },
      {
        id: 10,
        name: "Madrid, Span",
      },
    ],
    recent: [
      {
        id: 1,
        name: "Fort Lauderdale, United States",
      },
    ],
  };

  // searchTerm: string = "";
  searchResults: any;

  constructor(
    private storage: Storage,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    console.log(this.place);
    this.searchResults = this.locations.placesList;
    // console.log(this.searchResults);
  }

  filterByLetters(event: any) {
    // Process search bar keyboard event
    let fetchValue = event ? event.target.value : "";

    // If the value entered is not found or empty
    if (fetchValue && fetchValue.trim() != "") {
      this.searchResults = this.locations.placesList.filter((place) => {
        // Show location places that match search term
        return place.name.toLowerCase().indexOf(fetchValue.toLowerCase()) > -1;
      });
    } else {
      // Show all locations available in local storage
      this.searchResults = this.locations.placesList;
    }
  }

  pickLocation(city) {
    if (this.place === "origin") {
      this.storage.set("departure", city.name);
      this.searchLocation.departure = city.name;
    }

    if (this.place === "destination") {
      this.storage.set("arrival", city.name);
      this.searchLocation.arrival = city.name;
    }

    this.modalController.dismiss();
  }

  closeSearchBar() {
    this.modalController.dismiss();
  }
}

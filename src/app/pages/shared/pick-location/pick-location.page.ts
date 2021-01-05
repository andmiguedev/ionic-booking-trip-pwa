import { Component, OnInit, Input } from "@angular/core";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-pick-location",
  templateUrl: "./pick-location.page.html",
  styleUrls: ["./pick-location.page.scss"],
})
export class PickLocationPage implements OnInit {
  searchTerms: string = "";
  searchResults: any;

  // Type assertion not defined
  @Input() storageAction: any;
  @Input() search: any;

  locations: any = {
    placesList: [
      {
        assignId: 1,
        name: "Current location",
      },
      {
        assignId: 2,
        name: "San Juan, Puerto Rico",
      },
      {
        assignId: 3,
        name: "Buenos Aires, Argentina",
      },
      {
        assignId: 4,
        name: "Rome, Italy",
      },
      {
        assignId: 5,
        name: "Miami, United States",
      },
      {
        assignId: 6,
        name: "New York, United States",
      },
      {
        assignId: 7,
        name: "Paris, France",
      },
      {
        assignId: 8,
        name: "Munich, Germany",
      },
      {
        assignId: 9,
        name: "Manchester, United Kingdom",
      },
      {
        assignId: 10,
        name: "Madrid, Span",
      },
    ],
    recent: [
      {
        assignId: 1,
        name: "Miami, United States",
      },
    ],
  };

  constructor(private storage: Storage) {}

  ngOnInit() {
    // console.log(this.selectedPlace);
    this.searchResults = this.locations.placesList;
    // console.log(this.searchResults);
  }

  searchLocations(event: any) {
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

  filterByLetters(term) {
    if (this.storageAction) {
      this.storage.set("place", term.name);
      this.search.pickup = term.name;
    }
  }
}

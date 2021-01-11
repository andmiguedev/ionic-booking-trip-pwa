import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "pick-location",
  templateUrl: "./pick-location.page.html",
  styleUrls: ["./pick-location.page.scss"],
})
export class PickLocationPage implements OnInit {
  searchTerms: string = "";
  searchResults: any;

  // Type assertion not defined
  @Input() origin: any;
  @Input() sampleLocation: any;

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

  constructor(
    private storage: Storage,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    // console.log(this.selectedPlace);
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

  pickLocation(place) {
    if (this.origin === "origin") {
      this.storage.set("recent", place.name);
      this.sampleLocation.pickup = place.name;
    }

    if (this.origin === "destination") {
      this.storage.set("departure", place.name);
      this.sampleLocation.pickup = place.name;
    }

    this.modalController.dismiss();
  }

  closeSearchBar() {
    this.modalController.dismiss();
  }
}

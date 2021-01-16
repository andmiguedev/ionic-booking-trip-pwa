import { Component, ViewChild } from "@angular/core";
import { NavController, IonSlides } from "@ionic/angular";
import { Slides } from "src/app/models/interfaces/slides.interface";

@Component({
  selector: "app-walkthrough",
  templateUrl: "./walkthrough.page.html",
  styleUrls: ["./walkthrough.page.scss"],
})
export class WalkthroughPage {
  slideList: Array<Slides>;

  @ViewChild(IonSlides, {
    static: true,
  })
  slides: IonSlides;
  slideOpts = {
    effect: "flip",
    speed: 1000,
  };

  constructor(private navController: NavController) {
    this.slideList = [
      {
        title: "<strong>What is BookingTrip</strong>?",
        description:
          "We have worked through the line to bring you a smoother booking experience and, easy to use App for travelers",
        image: "assets/images/slides/slide1.png",
      },
      {
        title: "<strong>Why Booking Trip</strong>?",
        description:
          "Have access to Cruise schedules, Airplane seasonal tickets, and Train itineraries from the palm of your hand",
        image: "assets/images/slides/slide2.png",
      },
      {
        title: "Your leisure Vacation is on",
        description:
          "Visit city places that are around your area, get exclusive deals on multiple destinations, and travel throughout the country in comfort",
        image: "assets/images/slides/slide3.png",
      },
    ];
  }

  // Swipe to the next slide
  onNextSlide() {
    this.slides.slideNext(1000, false);
  }

  openFlightSearch() {
    this.navController.navigateForward("/flights/flights-search");
  }

  openLoginPage() {
    this.navController.navigateForward("/public/register");
  }
}

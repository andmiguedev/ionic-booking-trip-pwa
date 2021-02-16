import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController, LoadingController } from '@ionic/angular';

import { Slides } from 'src/app/models/interfaces/slides.interface';
import { AccountService } from '../../services/storage/account/account.service';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage {
  slideList: Array<Slides>;

  @ViewChild(IonSlides, {
    static: true,
  })
  slides: IonSlides;
  slideOpts = {
    effect: 'flip',
    speed: 1000,
  };

  constructor(
    private accountService: AccountService,
    private navController: NavController,
    private loadingController: LoadingController
  ) {
    this.slideList = [
      {
        title: '<strong>What is BookingTrip</strong>?',
        description:
          'We have worked through the line to bring you a smoother booking experience and, easy to use App for travelers',
        image: 'assets/images/slides/4002813.png',
      },
      {
        title: '<strong>Why Booking Trip</strong>?',
        description:
          'Have access to Cruise schedules, Airplane seasonal tickets, and Train itineraries from the palm of your hand',
        image: 'assets/images/slides/3946557.png',
      },
    ];
  }

  // Swipe to the next slide
  onNextSlide() {
    this.slides.slideNext(1000, false);
  }

  openLoginPage() {
    this.navController.navigateBack('/public/login');
  }

  async keepPassengerLoggedIn() {
    const loader = await this.loadingController.create({
      duration: 1000,
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      if (!this.accountService.accessProfileInfo) {
        this.navController.navigateRoot('/public/login');
      }
      this.navController.navigateForward('/navigation/flights/flights-search');
    });
  }
}

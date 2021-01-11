import { Component } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";
import { PromotionsService } from "./../../services/data/promotions/promotions.service";

@Component({
  selector: "app-deals",
  templateUrl: "./deals.page.html",
  styleUrls: ["./deals.page.scss"],
})
export class DealsPage {
  public customerDeals: any;

  constructor(
    private promotionsService: PromotionsService,
    private loadingController: LoadingController,
    private navController: NavController
  ) {
    this.customerDeals = this.promotionsService.getAllPromotions();
  }

  async loadBookingForm() {
    const loader = await this.loadingController.create({
      duration: 1000,
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navController.navigateForward("search-flights");
    });
  }
}

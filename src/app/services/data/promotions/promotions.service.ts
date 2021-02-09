import { Injectable } from "@angular/core";
import { Promotion } from "../../../models/interfaces/promo.interface";
import { DEALS } from "./local-promotions";

@Injectable({
  providedIn: "root",
})
export class PromotionsService {
  promotions: any;
  localPromotions: Array<Promotion> = [];

  constructor() {
    this.promotions = DEALS;
  }

  getAllPromotions() {
    return this.promotions;
  }
}

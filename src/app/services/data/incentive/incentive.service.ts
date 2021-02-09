import { Injectable } from "@angular/core";
import { Incentive } from "./../../../models/interfaces/incentive.interface";
import { INCENTIVES } from "./national-incentives";

@Injectable({
  providedIn: "root",
})
export class IncentiveService {
  incentives: any;
  incentiveDeals: Array<Incentive> = [];

  constructor() {
    this.incentives = INCENTIVES;
  }

  getAllIncentives() {
    return this.incentives;
  }
}

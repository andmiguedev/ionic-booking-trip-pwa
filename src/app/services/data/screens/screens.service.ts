import { Injectable } from "@angular/core";
import { Screen } from "../../../models/interfaces/screen.interface";
import { MOBILE } from "./mobile-pages";

@Injectable({
  providedIn: "root",
})
export class ScreensService {
  screens: any;
  screenPages: Array<Screen> = [];

  constructor() {
    this.screens = MOBILE;
  }

  getAllMobilePages() {
    return this.screens;
  }
}

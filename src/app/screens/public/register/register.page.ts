import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ValidatorService } from "./../../../services/form/validator/validator.service";

import {
  MenuController,
  NavController,
  LoadingController,
} from "@ionic/angular";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private menuController: MenuController,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private navController: NavController
  ) {}

  // Prevents User from sliding in mobile Menu
  // without being authenticated
  ionViewWillEnter() {
    this.menuController.enable(false);
  }

  ngOnInit() {
    this.validateFormFields();
  }

  validateFormFields() {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, ValidatorService.validatePersonName]],
      email: ["", [Validators.required, ValidatorService.validateEmail]],
      password: ["", [Validators.required, ValidatorService.validatePassword]],
      phone: ["", [Validators.required, ValidatorService.validatePhone]],
    });

    console.log(this.registerForm);
  }

  async finishRegistration() {
    //console.log(`
    //  Full Name: ${this.registerForm.value.name}
    //  Email: ${this.registerForm.value.email}`);

    const loader = await this.loadingController.create({
      duration: 2000,
    });

    loader.present();
  }

  openLoginPage() {
    this.navController.navigateRoot("/public/login");
  }
}

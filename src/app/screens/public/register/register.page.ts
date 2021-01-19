import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { ValidatorService } from "./../../../services/form/validator/validator.service";
import { AccountService } from "../../../services/storage/account/account.service";

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
    private navController: NavController,
    private accountService: AccountService,
    private router: Router
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
      fullName: [
        "",
        [Validators.required, ValidatorService.validatePersonName],
      ],
      email: ["", [Validators.required, ValidatorService.validateEmail]],
      password: ["", [Validators.required, ValidatorService.validatePassword]],
      phone: ["", [Validators.required, ValidatorService.validatePhone]],
    });

    // console.log(this.registerForm);
  }

  async finishRegistration() {
    this.accountService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(["/public/login"]);
        },
      });

    const loader = await this.loadingController.create({
      duration: 2000,
    });

    loader.present();
  }

  openLoginPage() {
    this.navController.navigateRoot("/public/login");
  }
}

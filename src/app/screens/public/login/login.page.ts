import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import {
  MenuController,
  AlertController,
  LoadingController,
  ToastController,
  NavController,
} from "@ionic/angular";

import { ValidatorService } from "./../../../services/form/validator/validator.service";
import { AccountService } from "../../../services/storage/account/account.service";
import { FacebookService } from "./../../../services/auth/facebook/facebook.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private menuController: MenuController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private facebookService: FacebookService,
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
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, ValidatorService.validateEmail]],
      password: ["", [Validators.required, ValidatorService.validatePassword]],
    });
  }

  async forgotCredentialsModal() {
    const alert = await this.alertController.create({
      subHeader: "Forgot Password?",
      message:
        "Enter email address you used to register, and we will send a link to reset your password",
      inputs: [
        {
          name: "email",
          type: "email",
          placeholder: "customer@domain.com",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("User canceled request to reset a password");
          },
        },
        {
          text: "Confirm",
          handler: async () => {
            const loader = await this.loadingController.create({
              duration: 2000,
            });

            loader.present();
            loader.onWillDismiss().then(async () => {
              const toast = await this.toastController.create({
                message: "Check your email for recovery instructions",
                duration: 3000,
                position: "bottom",
              });

              toast.present();
            });
          },
        },
      ],
    });

    await alert.present();
  }

  // Get access to field value by using controls attribute
  get formControls() {
    return this.loginForm.controls;
  }

  async authenticate() {
    if (this.loginForm.valid) {
      this.accountService
        .loginUser(
          this.formControls.email.value,
          this.formControls.password.value
        )
        .pipe(first())
        .subscribe({
          next: () => {
            this.navController.navigateForward("/shared/incentives");
          },
        });

      const loader = await this.loadingController.create({
        duration: 1000,
      });

      loader.present();
    }
  }

  loginWithFacebook() {
    this.facebookService.login();
  }

  openRegisterPage() {
    this.navController.navigateForward("/public/register");
  }
}

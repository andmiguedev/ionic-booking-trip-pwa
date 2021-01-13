import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      phone: ["", Validators.required],
    });
  }

  async finishRegistration() {
    const loader = await this.loadingController.create({
      duration: 2000,
    });

    loader.present();
  }

  openLoginPage() {
    this.navController.navigateRoot("/public/login");
  }
}

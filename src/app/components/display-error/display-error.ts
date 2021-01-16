import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ValidatorService } from "../../services/form/validator/validator.service";

@Component({
  selector: "error-message",
  template: `
    <p class="text-9" *ngIf="errorMessage !== null">
      <ion-text color="danger">{{ errorMessage }} </ion-text>
    </p>
  `,
})
export class DisplayErrorComponent {
  @Input()
  fieldName: FormControl;

  get errorMessage() {
    for (let propertyName in this.fieldName.errors) {
      // Check if form fields have been changed or visited
      if (
        this.fieldName.errors.hasOwnProperty(propertyName) &&
        this.fieldName.touched
      ) {
        return ValidatorService.invalidErrorMessages(propertyName);
      }
    }

    return null;
  }
}

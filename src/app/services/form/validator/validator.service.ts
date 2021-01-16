export class ValidatorService {
  static invalidErrorMessages(fieldName: string) {
    let invalidFields = {
      required: "Field name cannot be empty",
      invalidFullName: "Check your Name and make sure is valid",
      invalidEmail: "Check your Email and make sure is valid",
      invalidPassword: "Check your Password and make sure is valid",
      invalidPhone: "Check your Phone and make sure is valid",
    };

    return invalidFields[fieldName];
  }

  static validatePersonName(control) {
    // Names can contain apostrophes and when applicable hiphen
    if (control.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
      return null;
    }

    return { invalidFullName: true };
  }

  static validateEmail(control) {
    if (
      control.value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
      )
    ) {
      return null;
    }

    return { invalidEmail: true };
  }

  static validatePassword(control) {
    if (
      control.value.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      )
    ) {
      return null;
    }

    return { invalidPassword: true };
  }

  static validatePhone(control) {
    if (control.value.match(/^(\([0-9]{3}\) |[0-9]{3}-)|[0-9]{3} [0-9]{4}$/)) {
      return null;
    }

    return { invalidPhone: true };
  }
}

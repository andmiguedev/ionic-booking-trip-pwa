export class ValidatorService {
  static invalidErrorMessages(formField: string) {
    let invalidFields = {
      required: "Field name cannot be empty",
      invalidFullName: "Check your Name and make sure is valid",
      invalidEmail: "Check your Email and make sure is valid",
      invalidPassword: "Check your Password and make sure is valid",
      invalidPhone: "Check your Phone and make sure is valid",
    };

    return invalidFields[formField];
  }

  static validatePersonName(fieldName) {
    // Names can contain apostrophes and when applicable hiphen
    if (fieldName.value.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
      return null;
    }

    return { invalidFullName: true };
  }

  static validateEmail(fieldName) {
    if (
      fieldName.value.match(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
      )
    ) {
      return null;
    }

    return { invalidEmail: true };
  }

  static validatePassword(fieldName) {
    if (
      fieldName.value.match(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
      )
    ) {
      return null;
    }

    return { invalidPassword: true };
  }

  static validatePhone(fieldName) {
    if (
      fieldName.value.match(/^(\([0-9]{3}\) |[0-9]{3}-)|[0-9]{3} [0-9]{4}$/)
    ) {
      return null;
    }

    return { invalidPhone: true };
  }
}

import validator from 'validator'

const validateForm = values => {

  let errors = {}
  
  if(!values.firstName.trim()) {
    errors.firstName = "Enter your first name."
  }

  if(!values.lastName.trim()) {
    errors.lastName = "Enter your last name."
  }

  if(!values.email.trim()) {
    errors.email = "Enter your email."
  } else if (!validator.isEmail(values.email)) {
      errors.email = "Please enter a valid email."
  }

  if(!values.password.trim()) {
    errors.password = "Enter a password."
  } else if(values.password.trim().length < 8) {
    errors.password = "Please enter a valid password that is at least 8 characters."
  }

  return errors
}

export default validateForm
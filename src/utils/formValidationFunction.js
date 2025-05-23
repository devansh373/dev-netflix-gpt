export const checkValidation = (formData, isSignUp) => {
    // console.log(formData)
  const { name,email, password,confirmPassword } = formData;
//   console.log(email, password);
//   console.log(password, confirmPassword,password === confirmPassword);
  
  let error;
  if (isSignUp && !name) {
    // errors.name = "Name is required";
    error = "Name is required";
  }

  if (!email) {
    // errors.email = "Email is required";
    error = "Email is required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    // errors.email = "Email address is invalid";
    error = "Email address is invalid";
  }

  if (!password) {
    // errors.password = "Password is required";
    error = "Password is required";
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
  ) {
    error =
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long";
    // errors.password =
    //   "Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long";
  }

  if (isSignUp && confirmPassword && password !== confirmPassword) {
    // errors.confirmPassword = "Passwords do not match";
    error = "Password and Confirm password do not match";
  }

  return error;
};

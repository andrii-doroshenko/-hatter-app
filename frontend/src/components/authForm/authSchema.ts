import { object, string } from "yup";

const authSchema = object({
  username: string().required("Please, enter your user name"),
  secret: string()
    .required("Password is a required field")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)/,
      "The password must contain at least one letter and one number"
    )
    .min(4, "Password must be at least 4 characters long"),
  email: string().email().required("Email is required!"),
  first_name: string()
    .max(10, "Enter shorter first name")
    .matches(/^[A-Za-z]+$/, "First name should contain only letters"),
  last_name: string()
    .max(10, "Enter shorter last name")
    .matches(/^[A-Za-z]+$/, "Last name should contain only letters"),
});

export default authSchema;

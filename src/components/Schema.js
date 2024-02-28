import * as Yup from "yup";

export const Schema_login_form = Yup.object({
  buyer_name: Yup.string().required("* name is required"),
  user_name: Yup.string().required("* user name is required"),
  email: Yup.string()
    .email("enter valied email address")
    .required("* email is required"),
  phone_number: Yup.string()
    .required("* phone no. is required")
    .min(10, "Phone no. must be 10 digit*")
    .max(15, "Phone no. should be less then 15 digit"),
  license_number: Yup.string().required("* license number is required"),
  password: Yup.string()
    .required("* password is required")
    .min(6, "password must be 6 digit"),
  Confirm_Password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  isCheck: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
});

export const Schema_login_form1 = Yup.object({
  email: Yup.string()
    .email("enter valied email address")
    .required("* email is required"),
  password: Yup.string()
    .required("* password is required")
    .min(6, "password must be 6 digit"),
});

export const Seller_Schema = Yup.object({
  buyer_name: Yup.string().required("* name is required"),
  user_name: Yup.string().required("* user name is required"),
  email: Yup.string()
    .email("enter valied email address")
    .required("* email is required"),
  phone_number: Yup.string()
    .required("* phone no. is required")
    .min(10, "Phone no. must be 10 digit*")
    .max(15, "Phone no. should be less then 15 digit"),
  license_number: Yup.string().required("* license number is required"),

  isCheck: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
  buyer_card_number: Yup.string().required("* card no. is required")
    .min(16, "card number must be 16 digits*")
    .max(16, "card number must be 16 digits*"),
});
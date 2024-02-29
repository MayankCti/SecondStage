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

export const buyer_issue = Yup.object().shape({
  issue_claimed: Yup.string().required('Issue Claimed is required'),
  date_from: Yup.date().required('From date is required'),
  date_to: Yup.date().required('To date is required'),
  damaged_product: Yup.string().required('Damaged Product is required'),
  cleaning_fee: Yup.number().required('Cleaning Fee is required').positive('Cleaning Fee must be a positive number'),
  additional_not_listed: Yup.number().required('Additional not listed is required').positive('Additional not listed must be a positive number'),
  value_of_claim: Yup.number().required('Value of Claim is required').positive('Value of Claim must be a positive number'),
  // upload_product_photo: Yup.mixed().required('Upload Product Photo is required'),
  upload_product_photo: Yup.mixed().test('fileType', 'Invalid file type', (value) => {
    if (!value) return true; // Allow if no file is selected
    const validFileTypes = ['image/jpeg', 'image/png', 'image/gif']; // Example valid file types
    return validFileTypes.includes(value.type);
  }).required('Upload Product Photo is required'),
  tracking_number: Yup.string().required('Tracking Number is required'),
  add_note: Yup.string().required('Add a note is required'),
});
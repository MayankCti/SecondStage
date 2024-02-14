import * as Yup from 'yup';

export const Schema_login_form = Yup.object({
    buyer_name : Yup.string().required("* name is required"),
    user_name : Yup.string().required("* user name is required"),
    email:Yup.string().email('enter valied email address').required('* email is required'),
    phone_number:  Yup.number().required('* phone no. is required').min(999999999,"Phone no. must be 10 digit*"),
    license_number : Yup.string().required("* license number is required"),
    license_state : Yup.string().required("* license state is required"),
    password : Yup.string().required("* password is required").min(6,"password must be 6 digit"),
    Confirm_Password :  Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    
})

export const Schema_login_form1 = Yup.object({
    email:Yup.string().email('enter valied email address').required('* email is required'),
    password : Yup.string().required("* password is required").min(6,"password must be 6 digit"),
})
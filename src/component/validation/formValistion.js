import * as Yup from "yup";

export const signInValidations = Yup.object({
    email: Yup.string('').
    email('Please enter your email')
    .required('Email is required').matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ,'enter a valid email'),

    password:Yup.string('').min(6,'Password must be at least 6 characters').max(10,'only allow 10 characters').
    required('Please enter a valid password')
})

export const signUpFormValidation = Yup.object({
    email: Yup.string('')
    .required('Email is required').matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ,'enter a valid email'),
    firstName: Yup.string('').min(3).max(20).required('First Name is required'),
    lastName: Yup.string('').min(3).max(20).required('Last Name is required'),
    password:Yup.string('').min(6,'Password must be at least 6 characters').max(10,'only allow 10 characters').required('Password is required'),
})

export const forgetPasswordValidation = Yup.object({
    email: Yup.string('')
    .required('Email is required').matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ,'enter a valid email'),
})

export const newPasswordValidation = Yup.object({
    newPassword:Yup.string('').min(6,'Password must be at least 6 characters').max(10,'only allow 10 characters').required('Password is required'),
    confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('newPassword')], 'Newpasswords must match')})
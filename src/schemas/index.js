import * as yup from 'yup'

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/


export const loginSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Email is required'),
    password: yup.string().min(5,'Password must be at least 5 characters').matches(passwordRules, 'Please create a stronger password').required('Password is required')
}) 

export const signupSchema = yup.object().shape({
    firstname: yup.string().required("Firstname is required"),
    lastname:yup.string().required("Last name is required"),
    email: yup.string().email('Please enter a valid email address').required('Email is required'),
    password: yup.string().min(5,"Password must be at least 5 characters").matches(passwordRules,"Pleasae create a stronger password").required("Password is required"),
    terms: yup.bool().oneOf([true],'You need to accept the terms and conditions')
})

export const forgotpasswordSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Email is required')
})
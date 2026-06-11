import * as yup from 'yup'

let initalValue = {
    firstName: '',
    lastName: '',
    password: ''
}

const schema = yup.object().shape({
    firstName : yup
    .string()
    .matches(/^[a-zA-Z]{5,20}/ , 'minimum 5 sybole')
    .required('Enter name'),
    lastName : yup
    .string()
    .matches(/^[a-zA-Z]{5,20}/ , 'minimum 5 sybole')
    .required('Enter Second name'),
    password : yup
    .string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'Wrong')
    .required('Write your password'),
    confirmpassword : yup
    .string()
    .oneOf([yup.ref('password'),'the password does not match'])
    .required('Confirm your password'),
    email : yup
    .string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Wrong')
    .required('Confirm your email')
})

export { initalValue,schema }
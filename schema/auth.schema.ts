import * as yup from 'yup'

//?login
export const loginSchema = yup.object({
    email: yup.string().email('INVALID EMAIL!').required('EMAIL IS REQUIRED'),
    password: yup.string().required('PASSWORD IS REQUIRED'),
    phone: yup.string().required('PHONE IS REQUIRED')
})

//?register
export const registerSchema=yup.object({
    email:yup.string().email("Invalid email").required('EMAIL IS REQUIRED'),
    fullname:yup.string().required('full name is required'),
    password: yup.string().min(6,"atleast 6 characters required")
              .matches(/[A-Z]/,"atleast one uppercase required")
              .matches(/[a-z]/,"atleast one lowercase required")
              .matches(/[^A-Za-z0-9]/,"atleast one special character required")
              .matches(/[0-9]/,"atleast one number required")
              .required('PASSWORD IS REQUIRED'),
    c_password: yup.string()
              .oneOf([yup.ref('password')], "PASSWORDS DO NOT MATCH")
              .required("CONFIRM PASSWORD IS REQUIRED"), 
    phone:yup.string().optional(),          

});
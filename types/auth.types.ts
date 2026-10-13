import { loginSchema, registerSchema } from '@/schema/auth.schema';
import * as yup from 'yup';


// export type LoginInput = { email: string; password: string; phone: string };

// export type TRegisterInput = LoginInput & {
//     fullname:string; //field ko name attribute ma j xa tei
//     c_password:string;
//     email:string;
//     phone:string;
// };


//yup ko schema use garera type banako
export type TLoginInput=yup.InferType<typeof  loginSchema>;

export type TRegisterInput=yup.InferType<typeof registerSchema>;

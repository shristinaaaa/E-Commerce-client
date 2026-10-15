import { TLoginInput } from "@/types/auth.types";
import axios, { AxiosError } from "axios";


//*mutation(request send garna use hune func)
    
   export const login = async (data: TLoginInput) => {
    try {
        const response = await axios.post(
            'http://localhost:8080/api/v1/auth/login',
            data
        ); 
        

        // console.log('Login successful:', response.data);
        return response.data;

    } catch (error:unknown) {
        // if (axios.isAxiosError(error)) {
        //     console.log('Status:', error.response?.status);
        //     console.log('Backend error:', error.response?.data);
        // } else {
        //     console.log('Unexpected error:', error);
        // }
        if(error instanceof AxiosError){
            throw error?.response?.data
        }
    }
    };
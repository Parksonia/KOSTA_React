import axios from "axios";
export const url = "http://localhost:8080";

const axiosInToken=(token) =>(
    axios.create({
        baseURL:url,
        timeout:5000,

    })
    
)
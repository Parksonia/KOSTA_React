import axios from "axios";

export const url = "http://localhost:8090";

export const axiosInToken = (token) => 
    axios.create({
        baseURL :url,
        timeout : 5000,
        headers : {
            Authorization:token
        }
    })

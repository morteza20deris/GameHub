import axios, { AxiosRequestConfig } from "axios";

export interface fetchedAPIResults <T>{
    count: number;
    next:string|undefined
  results: T[];
}

const AxiosInstance =  axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:"9604737355564be2afddbf40b9c8ecd8"
    }
})

class APIClient<T> {
    endPoint: string
    
    constructor(endpoint: string) {
        this.endPoint = endpoint
    }

    getAll = (config:AxiosRequestConfig)=> {
        return AxiosInstance
            .get<fetchedAPIResults<T>>(this.endPoint, config)
            .then(res=>res.data)
    }
}

export default APIClient
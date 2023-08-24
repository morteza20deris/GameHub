import axios, { AxiosRequestConfig } from "axios";

export interface fetchedAPIResults <T>{
    count: number;
    next:string|null|undefined
    previous:string|null|undefined
    results: T[];
}

const AxiosInstance =  axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:"d6e55ee3f23047d4afaedcf08fc45dca"
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
    get = (id:number|string) => {
        return AxiosInstance
            .get<T>(this.endPoint+"/"+id)
        .then(res=>res.data)
    }
}

export default APIClient
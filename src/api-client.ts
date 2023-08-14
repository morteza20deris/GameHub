import axios from "axios";

export default  axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key:"9604737355564be2afddbf40b9c8ecd8"
    }
})
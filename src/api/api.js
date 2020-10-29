import axios from "axios"

export const fetchData = () => {
    return axios.get('http://localhost:3004/data')
}
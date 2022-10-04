import axios from "axios";

const client = axios.create({ baseURL: 'http://3.37.212.202:8080' })

export default client
import axios from "axios";

// 개발계

const client = axios.create({ baseURL: 'http://3.37.212.202:8080' })

// 운영계

// const client = axios.create({ baseURL: 'http://3.38.235.59:8080' })

export default client
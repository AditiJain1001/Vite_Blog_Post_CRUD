import axios from "axios"

//add in approiate endpoint
const API_ENDPOINT = 'https://your-api-endpoint.com/posts';

const getAll = async () => {
    return axios.get(API_ENDPOINT);
};

export default { getAll };
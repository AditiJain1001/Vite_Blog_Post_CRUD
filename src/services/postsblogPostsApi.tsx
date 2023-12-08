import axios from "axios"

const API_ENDPOINT = process.env.BLOG_POSTS_API_ENDPOINT



const getAll = async () => {
    return axios.get(`${API_ENDPOINT}/posts)`)
};

export default { getAll };
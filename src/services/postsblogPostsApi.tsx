import axios from "axios"

// const API_ENDPOINT = process.env.BLOG_POSTS_API_ENDPOINT
const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"



const getAll = async () => {
    try {
        const response = await axios.get(`${API_ENDPOINT}`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default { getAll };
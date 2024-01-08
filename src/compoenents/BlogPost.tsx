
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, addPost, updatePost, deletePost } from "../redux/actions/postActions";
import { Button, TextField, Card, CardContent } from '@mui/material';
import "./blogPost.scss"

//useEffect for loading blog posts on refresh - add better styling!

const BlogPost = () => {
    const dispatch = useDispatch();

    // Fetch posts from Redux store
    const posts = useSelector(state => state.getPostsReducer?.posts );

    // Local state for adding a new post
    const [newPost, setNewPost] = useState({ title: '', body: '' });

    const handleGetPosts = () => {
        dispatch(getPosts());
    };

    const handleAddPost = () => {
        dispatch(addPost(newPost));
        setNewPost({ title: '', body: '' }); // Reset form after submit
    };

    const handleUpdatePost = (post) => {
        // Implement logic to update a post
        dispatch(updatePost(post));
    };

    const handleDeletePost = (id) => {
        dispatch(deletePost(id));
    };

    return (
        <div className="blog-post">
            <Button variant="contained" color="primary" onClick={handleGetPosts}>Load Posts</Button>
            
            <div className="blog-post__form">
                <TextField
                    label="Title"
                    variant="outlined"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <TextField
                    label="Body"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={newPost.body}
                    onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
                />
                <Button variant="contained" color="secondary" onClick={handleAddPost}>Add Post</Button>
            </div>

            <div className="blog-post__list">
                {posts && posts.map(post => (
                    <Card key={post.id} className="blog-post__card">
                        <CardContent>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <Button variant="outlined" onClick={() => handleUpdatePost(post)}>Edit</Button>
                            <Button variant="outlined" color="error" onClick={() => handleDeletePost(post.id)}>Delete</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default BlogPost;

// --------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
//RESERACH AGAIN - import PropTypes from 'prop-types'
// import React from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { getPosts, addPost, updatePost, deletePost } from "../redux/actions/postActions";
// import { get } from "http";


// const BlogPost = () =>  {
    
//     //mapStateToProps = old way
//     const posts = useSelector(state => state.getPosts.posts)
//     const addedPost = useSelector(state => state.addPost.post)
//     const updatedPost = useSelector(state => state.updatePost.post)
//     const deletedPost = useSelector(state => state.deletePost.post)

//     //mapDispatchToProps = old way
//     const dispatch = useDispatch();
    
//     const handleGetPosts = () => {
//         dispatch(getPosts())
//     }

//     const handleAddPost = (payload) => {
//         dispatch(addPost(payload))
//     }

//     const handleUpdatePost = (payload) => {
//         dispatch(updatePost(payload))
//     }

//     const handleDeletePost = (payload) => {
//         dispatch(deletePost(payload))
//     }

//     return (
//       <div>
//         <button onClick={handleGetPosts} >Load Posts</button>
//         {/* Render other ui elements + blog posts here */}
//         <div>
//             {posts && posts.map( (post)=> {
//                 <div>
//                 <h3>{post.title}</h3>
//                 <p>{post.body}</p>
//                 <button>Edit</button>
//                 </div>
//             })}
//         </div>
//       </div>
//     )
  
// }

// // export default BlogPost


//RESERACH AGAIN - import PropTypes from 'prop-types'
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts, addPost, updatePost, deletePost } from "../redux/actions/postActions";
import { get } from "http";


const BlogPost = () =>  {
    
    //mapStateToProps = old way
    const posts = useSelector(state => state.getPosts.posts)
    const addedPost = useSelector(state => state.addPost.post)
    const updatedPost = useSelector(state => state.updatePost.post)
    const deletedPost = useSelector(state => state.deletePost.post)

    //mapDispatchToProps = old way
    const dispatch = useDispatch;
    
    const handleGetPosts = () => {
        dispatch(getPosts())
    }

    const handleAddPost = (payload) => {
        dispatch(addPost(payload))
    }

    const handleUpdatePost = (payload) => {
        dispatch(UpdatePost(payload))
    }

    const handleDeletePost = (payload) => {
        dispatch(deletePost(payload))
    }

    return (
      <div>
        <button onClick={handleGetPosts} >Load Posts</button>
        {/* Render other ui elements + blog posts here */}
        <div>
            {posts && posts.map( (post)=> {
                <div>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <button>Edit</button>
                </div>
            })}
        </div>
      </div>
    )
  
}

export default BlogPost
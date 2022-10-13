import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { PostAdded } from './Posts/PostSlice';

export const PostForm = () => {
    const [postTitle,setPostTitle] = useState("");
    const [postContent,setPostContent] = useState("");
    const [postAuthor,setPostAuthor] = useState("");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {title:postTitle,content:postContent,author:postAuthor};
        dispatch(PostAdded(data));
        console.log(data,"form data")
        setPostAuthor("");
        setPostContent("");
        setPostTitle("");
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Post Title</label>
            <input value={postTitle} type="text" onChange={(e) => setPostTitle(e.target.value)} />
            <label>Post Content</label>
            <input value={postContent} type="text" onChange={(e) => setPostContent(e.target.value)}/>
            <label>Post Author</label>
            <input value={postAuthor} type="text" onChange={(e) => setPostAuthor(e.target.value)}/>
            <button type='submit'>Add Post</button>
        </form>
    </div>
  )
}

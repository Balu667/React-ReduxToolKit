import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionsAdded } from './Posts/PostSlice';

export const PostCard = ({post}) => {

    const dispatch = useDispatch();

    const emoji = {
        thumbsups:"👍",
        heart:"🧡",
        coffee:"☕",
        fire:"🧨"
    }

    const emojiCountHandler = (name) => {
        const data = {postId: post.id, reaction:name};
        dispatch(reactionsAdded(data))
     console.log("clicked");
    };
  return (
    <div className='card'>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>{post.author}</p>
        {Object.entries(emoji).map(([name,emoji]) => <span key={name}><button type='button' onClick={() => emojiCountHandler(name)} className='emoji-button'>{emoji}</button><span>{post.reactions[name]}</span></span>)}
    </div>
  )
}

import React from 'react';
import clasess from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div>
        my posts
                
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <Post message='Hi, how are you?' like='15' />
        <Post message="It's my firs post" like='20'/>

    </div>

    )
}

export default MyPosts;
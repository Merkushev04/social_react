import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    

    let posts = props.postsData.map(post => (<Post message={post.message} like={post.like} />)
    );

    let newPostElement = React.createRef();


    let onAddPost = () => {  
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);  
    };

    return (
        <div className={s.postsBlock}>

            <h3>My posts</h3>

            <div>
                <textarea ref={newPostElement} 
                onChange={onPostChange} 
                value={props.newPostText} />
            </div>

            <div >
                <button onClick={onAddPost} >Add post</button>
                <button>Remove</button>
            </div >

            <div className={s.posts}>
                {posts}
            </div>


        </div>

    )
}

export default MyPosts;
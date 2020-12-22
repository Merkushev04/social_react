import React from 'react';
import clasess from './Post.module.css';

const Post = (props) => {
    return (
        <div className={clasess.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEJw-X9coO-yHSeStxdfIkEas1ProvBEoxA&usqp=CAU'></img>
            
             {props.message}

            <div>
                <span>{props.like}</span>
            </div>

        </div> 
    )
}

export default Post;

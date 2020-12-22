import React from 'react';
import clasess from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={clasess.content}>
        <div>
            <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'></img>
        </div>
        <div>
            ava + discriptions
        </div>

        <MyPosts />
    </div>
    
}

export default Profile;
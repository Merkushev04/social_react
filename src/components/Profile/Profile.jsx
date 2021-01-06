import React from 'react';
import clasess from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className={clasess.content}>
            <ProfileInfo />
            <MyPostsContainer 
            store={props.store}
            />
        </div>
    )
}

export default Profile;
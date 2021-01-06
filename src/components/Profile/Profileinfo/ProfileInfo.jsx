import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className="ProfileInfo">
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + discriptions
            </div>
        </div>
    )
}

export default ProfileInfo;
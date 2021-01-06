import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;


    return (
        <div className={s.dialog}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEJw-X9coO-yHSeStxdfIkEas1ProvBEoxA&usqp=CAU'></img>
            <br></br>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;
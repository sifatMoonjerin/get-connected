import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faPhone, faEnvelope, faLaptop, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    return (
        <div>
            <div className="container">
            <div className="img-container">
                <img src={props.user.background} alt="" className="banner-img"></img>
                <img src={props.user.image} alt="" className="profile-img"></img>
            </div>


            <div className="content">
                <div className="title">
                <p>{props.user.name}</p>
                <span>@{props.user.username}</span>
                </div>

                <div className="info">
                    <p><FontAwesomeIcon icon={faDollarSign}  /> {props.user.salary}</p>
                    <p><FontAwesomeIcon icon={faPhone} /> {props.user.phone}</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> {props.user.email}</p>
                    <p><FontAwesomeIcon icon={faLaptop}  /> {props.user.website}</p>
                </div>

                <button className="connect">
                    <FontAwesomeIcon icon={faUserFriends} /> connect
                </button>
            </div>
            </div>
        </div>
    );
};

export default User;
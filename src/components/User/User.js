import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faPhone, faEnvelope, faDesktop, faDonate, faUserMinus } from '@fortawesome/free-solid-svg-icons';

const User = (props) => {
    const updateButton = () => {
        if(props.user.isConnected){
            return <button onClick={() => props.handleConnectBtn(props.user,'disconnect')} className="disconnect">
            <FontAwesomeIcon icon={faUserMinus} /> disconnect
        </button>
        } else{
            return <button onClick={() => props.handleConnectBtn(props.user,'connect')} className="connect">
            <FontAwesomeIcon icon={faUserFriends} /> connect
        </button>
        }
    }

    return (
        
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
                <p><FontAwesomeIcon icon={faDonate}  /> {props.user.salary}</p>
                <p><FontAwesomeIcon icon={faPhone} /> {props.user.phone}</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> {props.user.email}</p>
                <p><FontAwesomeIcon icon={faDesktop}  /> {props.user.website}</p>
            </div>

            {updateButton()}

        </div>
        </div>
        
    );
};

export default User;
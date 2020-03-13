import React from 'react';
import './User.css';

const User = (props) => {
    return (
        <div>
            <img src={props.user.image} alt="notok"></img>
            <p>Name: {props.user.name}</p>
            <p>Userid: {props.user.username}</p>
            <p>email: {props.user.email}</p>
            <p>phone: {props.user.phone}</p>
            <p>website: {props.user.website}</p>
            <p>salary: {props.user.salary}</p>
        </div>
    );
};

export default User;
import React from 'react';
import User from '../User/User';
import './List.css';


const List = (props) => {
     return (
        <div className="user-list">
            {props.users.map(user => {
                return <User user={user} handleConnectBtn={props.handleConnectBtn}></User>
            })}
        </div>
    );
};

export default List;
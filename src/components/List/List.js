import React, { useState } from 'react';
import User from '../User/User';
import './List.css';
import fakeUsers from '../../fakeUsers/fakeUsers';

const List = () => {
    const newUsers = fakeUsers.map(user => {
        user.isConnected = false;
        return user;
    });

    const [users, setUsers] = useState(newUsers);
    const [count, setCount] = useState([]);

    const handleConnectBtn = (person, status) => {
        if(status === "connect"){
            setCount([...count, person])
        } else{
            setCount(count.filter(user => user.id !== person.id))
        } 
        const updatedUsers = users.map(user => {
            if(user.id === person.id){
                user = {...user, "isConnected":!user.isConnected}
            }
            return user;
        })
        setUsers(updatedUsers)
    }

    

    return (
        <div className="user-list">
            {users.map(user => {
                return <User user={user} handleConnectBtn={handleConnectBtn}></User>
            })}
            {console.log(count)}
        </div>
    );
};

export default List;
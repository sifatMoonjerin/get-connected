import React, { useState }  from 'react';
import List from '../List/List';
import fakeUsers from '../../fakeUsers/fakeUsers';
import Counter from '../Counter/Counter';

const Find = () => {
    const newUsers = fakeUsers.map(user => {
        user.isConnected = false;
        return user;
    });

    const [users, setUsers] = useState(newUsers);
    const [connected, setConnected] = useState([]);

    const handleConnectBtn = (person, status) => {
        if(status === "connect"){
            setConnected([...connected, person])
        } else{
            setConnected(connected.filter(user => user.id !== person.id))
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
        <div>
            <List users={users} handleConnectBtn={handleConnectBtn}></List>
            <Counter connected={connected} handleConnectBtn={handleConnectBtn}></Counter>
        </div>
    );
};

export default Find;
import React, { useState }  from 'react';
import List from '../List/List';
import fakeUsers from '../../fakeUsers/fakeUsers';

const Find = () => {
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
        <div>
            {console.log(count)}
            <List users={users} handleConnectBtn={handleConnectBtn}></List>
        </div>
    );
};

export default Find;
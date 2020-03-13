import React from 'react';
import './Counter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Counter = (props) => { 
    const connected = props.connected
    const total = connected.reduce((total, user) => {
        const salary = Number(user.salary.split(',').join('')) 
        return total + salary  
    },0)
    
    return (
        <div className="connection-container">
            <div className="connection-summary">
                <h2>Connection Summary</h2>
                <h3>Connections: {props.connected.length}</h3>
                
                {connected.map(user => {
                    return (
                        <div>
                            <p>{user.name} ({user.salary})</p> 
                            <FontAwesomeIcon className="trash-can" onClick={()=>props.handleConnectBtn(user, 'disconnect')} icon={faTrash}  />
                        </div>
                    )
                })}
                
                <h3>Total Salary: ${total}</h3>
            </div>
        </div>
    );
};

export default Counter;
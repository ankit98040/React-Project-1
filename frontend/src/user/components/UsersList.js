import React from 'react';
import './UsersList.css';

const UsersList = props => {
    if (props.items.length === 0) {
        return <div className="center"></div>
    }
};

export default UsersList;
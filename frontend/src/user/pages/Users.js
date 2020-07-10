import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ankit Pramanik', 
            image: 'https://static.toiimg.com/thumb/msid-68020090,imgsize-70873,width-800,height-600,resizemode-75/68020090.jpg' , 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;
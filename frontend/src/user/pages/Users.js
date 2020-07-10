import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ankit Pramanik', 
            image: 'https://www.filmibeat.com/img/315x100x396/popcorn/profile_photos/rashmika-mandanna-20190705125340-37195.jpg?auto=compress' , 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;
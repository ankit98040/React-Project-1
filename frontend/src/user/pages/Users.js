import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ankit Pramanik', 
            image: 'https://mcmscache.epapr.in/post_images/website_197/post_16721229/thumb.jpg' , 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;
import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ankit Pramanik', 
            image: 'https://magarticles.magzter.com/articles/9780/364628/5d5152a64f29e/Rashmika-Mandanna-Racing-To-The-Top.jpg' , 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;
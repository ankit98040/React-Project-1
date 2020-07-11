import React from 'react';
import UsersList from '../components/UsersList';


const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ankit Pramanik', 
            image: 'https://szcdn.ragalahari.com/aug2018/starzone/rashmika-mandanna-photos/rashmika-mandanna-photos1t.jpg' , 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;
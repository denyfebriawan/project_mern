import React from "react";
import UserList from "../components/UserList";

const Users = () => {
    const USERS = [
        {
        id: 'u1', 
        name:'Max Schrarz', 
        image:'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        places: 3
    }
]

    return(
        <UserList items={USERS} />
    ); 
};

export default Users;
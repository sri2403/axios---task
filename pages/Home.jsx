import React, { useEffect, useState } from 'react';
import "./home.css";
import axios from 'axios';

const Home = () => {
    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        await axios.get("https://6648c6c14032b1331bec647f.mockapi.io/api/users")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));
    }
    return (
        <div className="card-container">
            {users.map((user, index) => (
                <div key={index} className="card">
                    <img src={"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1708758482~exp=1708762082~hmac=2bb1bf59158311ff3a2f668a0b1b8aa128e08ee755ba0db2f46eaac820b2c528&w=826"} alt="User" />
                    <h2 className='p-1'>{user.name}</h2>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
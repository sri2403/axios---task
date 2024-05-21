import React, { useEffect, useState } from 'react';
import "./home.css";
import axios from 'axios';
import backViewTouristNearLake from 'D:/dev/axios---task/back-view-tourist-near-lake.jpg';

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
                    <img src={backViewTouristNearLake} alt="User" />
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
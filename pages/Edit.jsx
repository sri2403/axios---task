import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./edit.css";

const Edit = ({id}) => {
    const[editData,setEditData]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });
    const navigate=useNavigate();
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        await axios.get(`https://6648c6c14032b1331bec647f.mockapi.io/api/users/${id}`)
        .then(res=>setEditData(res.data))
        .catch(err=>console.log(err));
    }
    const handleChange=(e)=>{
        const{name,value}=e.target;
        setEditData(pre=>({
            ...pre,[name]:value
        }))

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put(`https://6648c6c14032b1331bec647f.mockapi.io/api/users/${id}`,editData)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
        setEditData({
            name:"",
            username:"",
            email:"",
            phone:""
        });
    }
    return (
        <div>
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={editData.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={editData.username} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={editData.email} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={editData.phone} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit" className="submit-button">Update</button>
                <p>Once you've updated the form, click "Back" to proceed.</p>
            </form>
        </div>
        <div><button onClick={()=>navigate("/users")} className="back-button text-end">Back</button></div>
        </div>
    );
};

export default Edit;
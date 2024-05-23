import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const[createData,setCreateData]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setCreateData(pre=>({
            ...pre,[name]:value
        }))

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`https://6648c6c14032b1331bec647f.mockapi.io/api/users`,createData)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err));
        setCreateData({
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
                        value={createData.name} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={createData.username} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={createData.email} 
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={createData.phone} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit" className="submit-button">Create</button>
                <p>Once you've created the form, click "Back" to proceed.</p>
            </form>
          </div>
          <div><button onClick={()=>navigate("/users")} className="back-button">Back</button></div>
        </div>
    );
};

export default Create;
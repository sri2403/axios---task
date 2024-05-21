import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './users.css';
import { useNavigate } from 'react-router-dom';

const Users = ({setId}) => {
    const[users,setUsers]=useState([]);
    const navigate=useNavigate();
    const[deleteData,setDeleteData]=useState([]);
    useEffect(()=>{
        fetchData();
    },[deleteData])
    const fetchData=async()=>{
        await axios.get("https://6648c6c14032b1331bec647f.mockapi.io/api/users")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err));
    }
    const handleEdit=(id)=>{
        setId(id)
        navigate(`/edit/${id}`)
    }

    const handleDelete=async(id)=>{
        await axios.delete(`https://6648c6c14032b1331bec647f.mockapi.io/api/users/${id}`)
        .then(res=>setDeleteData(res.data))
        .catch(err=>console.log(err));
    }
    return (
        <div>
            <h2 className='m-2'>Users</h2>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><button onClick={() => handleEdit(user.id)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='m-3 btn btn-success' onClick={()=>navigate('/create')}>Create User</button>
        </div>
    );
};

export default Users;
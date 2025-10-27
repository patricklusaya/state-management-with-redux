import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/usersSlice";

export default function ChildComponent() {

  const dispatch = useDispatch();

  const {users, loading , error} = useSelector( (state)=> state.users );

  console.log("users, loading, error", users, loading,error)


  useEffect ( ()=>{

  dispatch(fetchUsers())
    
  }, [])

  if (loading) {
  return <p>Loading Users...</p>;
}

if (error) {
  return <p>{error}</p>;
}

if (!users || users.length === 0) {
  return <p>No users found</p>;
}

  

  return (
    <div>
      <p>Users</p>
       <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </div>
  )
}

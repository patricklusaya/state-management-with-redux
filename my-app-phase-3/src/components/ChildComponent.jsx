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
  

  return (
    <div>
      <p>Users</p>
    </div>
  )


  
}

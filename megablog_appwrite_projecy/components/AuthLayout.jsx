import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'


export default function Protected({children,authentication}) {
 
    const[loader,setLoader] = useState(true);
    const authStatus = useSelector(state=>state.auth.status);
    const navigate = useNavigate();

    useEffect(()=>{
        if(authentication && authStatus!= authentication)
        {
            navigate('/login')
        }
        else if(!authentication && authStatus !=  authentication)
        {
            navigate('/');
        }
        setLoader(false);
    },[authStatus,navigate,authentication])

  return (
    <div>AuthLayout</div>
  )
}


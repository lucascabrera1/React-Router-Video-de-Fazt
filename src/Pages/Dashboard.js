import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'

export default function Dashboard() {

    const navigate = useNavigate()

    const handleclick = () =>{
        navigate("/")
    }
  return (
    <div>
        
        <h1>Dashboard</h1>
        <button onClick={handleclick}>Log Out</button>
        <Link to="welcome">say welcome</Link>
        <br/>
        <Link to="goodbye">say goodbye</Link>
        <Outlet/>
    </div>
  )
}

import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'

import HomePage from "./Pages/HomePage";
import AbputPage from "./Pages/AboutPage";
import UsersPage from "./Pages/UsersPage";
import NotFound from "./Pages/NotFound";
import Navbar from "./Components/Navbar"
import UserPage from "./Pages/UserPage";
import Dashboard from "./Pages/Dashboard";

export default function App () {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element = {<HomePage />} ></Route>
                <Route path="/About" element = {<AbputPage/>} ></Route>
                <Route path="/Users" element = {<UsersPage/>} ></Route>
                <Route path="/Usuarios" element={<Navigate replace to="/Users" />}></Route>
                <Route path="/Users/:id" element={<UserPage/>}></Route>
                <Route path="/Users/new" element={<p>new user</p>}></Route>
                <Route path="/dashboard/*" element={<Dashboard/>} >
                    <Route path='welcome' element={<p>welcome</p>}></Route>
                    <Route path='goodbye' element={<p>goodbye</p>}></Route>
                </Route>
                <Route path="*" element= {<NotFound/>}></Route>
            </Routes>
        </Router>
    )
}
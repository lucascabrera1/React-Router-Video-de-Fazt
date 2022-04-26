import React from "react";
import {Link} from "react-router-dom"

const userID = 26062011

export default function HomePage(){
    return (
        <div>
            <h1>Hello World from home page</h1>
            <Link to= {`/Users/${userID}`} >Usuarios</Link>
        </div>
    )
}
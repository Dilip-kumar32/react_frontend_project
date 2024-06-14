import React from 'react';
import {Link} from 'react-router-dom';

export default function Navber() {
  return (
    
    <nav>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/"><li>Institute</li></Link>
            <Link to="/about"><li>About</li></Link> 
            <li>Login</li>
            <li>Registeration</li>
        </ul>
    </nav>   


    
  )
}

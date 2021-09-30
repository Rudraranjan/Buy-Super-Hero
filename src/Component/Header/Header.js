import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {   
   
    return (
       <div>
            <div className="header-Component">
                <h1>Get Best Employee For Your Company</h1>
                <h4>All Candidates are highly Experienced on his own field</h4>
                <h2>Total Budget of Your Company : Rs. 500000 (Indian Currency)/month</h2>
             </div>
             <div className='nav-container'>
                 <nav>
                     <a href="/all candidates">All Candidates</a>
                     <a href="/chose candidates">Selected Candidates</a>
                     <a href="my profile">Login Here</a>
                </nav>
             </div>
       </div>
    );
};

export default Header;
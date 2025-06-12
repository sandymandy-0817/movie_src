import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(props) {
    return (
        <nav>
            <ul>
                <li><Link to='/movie'>HOME</Link></li>
                <li><Link to='/intro'>INTRO</Link></li>
                <li><Link to='/api'>API</Link></li>
                <li><Link to='/contactus'>CONTACT US</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
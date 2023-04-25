import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'>home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/resister'>Resister</Link>
            <Link to='/resister-rbs'>Resister RBS</Link>
            <Link to='/resister-rb'>Resister RB</Link>
        </div>
    );
};

export default Header;
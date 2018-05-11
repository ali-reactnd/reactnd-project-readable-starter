import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
    <center><h2>404 - The page you are looking for can't be found.</h2></center>
    <center><Link to="/">Return to Home Page</Link></center>
    </div>
);

export default NotFound;
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h2>404 - The page you are looking for can't be found.</h2>
        <Link to="/">Return to Home Page</Link>
    </div>
);

export default NotFound;
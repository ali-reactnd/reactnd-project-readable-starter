import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
    return (
        <div>
            <hr />
            <Link to="/">
                <button type="button">Home</button>
            </Link>
            <hr />
        </div>
    )
}

export default HomeButton;
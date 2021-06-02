import React from 'react';
import { Link } from 'react-router-link';

const Main = ({children}) => (
    <div>
        <h1>
            <Link to='/'>index</Link>
        </h1>
        {React.cloneElement(children)}
    </div>
)

export default Main;

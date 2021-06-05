import React from 'react';

const Main = ({children}) => (
    <div>
        {React.cloneElement(children)}
    </div>
)

export default Main;

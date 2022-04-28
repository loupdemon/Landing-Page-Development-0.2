import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CustomLink = ({to,children}) => {
    const location = useLocation();
    const match = location.pathname===to;
    return (
        <Link to={to} className={match?"active-nav":""}>{children}</Link>
    );
};

export default CustomLink;
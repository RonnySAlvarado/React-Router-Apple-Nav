import React from 'react';
import { Link } from 'react-router-dom';

const AppleNav = props => {
    return (
        props.data.map(eachNav => {
            <Link to={`/${eachNav.title.toLowerCase()}`}>{eachNav.title}</Link>
        })
    )
}

export default AppleNav;
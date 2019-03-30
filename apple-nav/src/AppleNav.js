import React from 'react';
import { Link } from 'react-router-dom';

const AppleNav = props => {
    return (
        <div>
            {props.data.map(eachNav => {
                return <Link to={`/${eachNav.title}/`}>{eachNav.title}</Link>
            })}
        </div>
    )
}

export default AppleNav;
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyle = styled.nav`
    margin: 0 auto;
    height: 44px;
    width: 1903px;
    display: flex;
    justify-content: center;
    background-color: black;
    div {
        width: 1000px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            color: white;
        }

    }
    
`;

const AppleNav = props => {
    return (
        <NavBarStyle>
            <div>
                {props.data.map(eachNav => {
                    return <Link to={`/${eachNav.title}/`}>{eachNav.title}</Link>
                })}
            </div>
        </NavBarStyle>
    )
}

export default AppleNav;
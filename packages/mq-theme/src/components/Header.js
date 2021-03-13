import React from "react";
import {connect, styled, css} from "frontity";
import Link from "./Link";
import Logo from "../assets/cc.png"

const Navigation = styled.nav`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:95%;
    margin:2rem auto;
`;
const NavigationContentLeft = styled.div`
`;

const NavigationContentRight = styled.div`
    & a:not(last-child) {
        margin-right:10px;
    }
    & a:last-child {
        margin-right:0px;
    }
`;

const Header = () => {
    return (
        <>
            <Navigation>
                <NavigationContentLeft>
                    <Link href="/"><img className="nav-logo" src={Logo} alt="Website sample logo"/></Link>
                </NavigationContentLeft>
                <NavigationContentRight>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/movies">Movies</Link>
                </NavigationContentRight>
            </Navigation>
        </>
    )
}

export default connect(Header);
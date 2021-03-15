import React from "react";
import {connect, styled, css} from "frontity";
import Link from "./Link";
import Logo from "../assets/cc.png"
import Toggle from "./Toggle";

const Header = () => {
    return (
        <>
            <Navigation>
                <NavigationContent>
                    <Link href="/"><img className="nav-logo" src={Logo} alt="Website sample logo"/></Link>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/movies">Movies</Link>
                    <Toggle />
                </NavigationContent>
            </Navigation>
        </>
    )
}

const Navigation = styled.nav`
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:column;

    width:100px;
    background:#202328;
`;

const NavigationContent = styled.div`
    height: 100vh;

    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    flex-direction:column;
`;

export default connect(Header);
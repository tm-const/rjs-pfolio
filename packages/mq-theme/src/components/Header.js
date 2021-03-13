import React from "react";
import {connect} from "frontity";
import Link from "./Link";

const Header = () => {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/movies">Movies</Link>
        </>
    )
}

export default connect(Header);
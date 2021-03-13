import React from  "react";
import {Global, css} from "frontity";

const Base = () => {

    // Literal Strings
    const mainBlack = '#4a4a4a';
    const mainRed = '#f2322b';

    return (
        <Global
            styles = { css`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

                html{
                    font-family: 'Montserrat', sans-serif;
                }
                body {
                    margin:0;
                    padding:0;
                }
                a {
                    font-weight: bolder;
                    color: ${mainBlack};
                    text-decoration:none;
                }
                a:hover {
                    color: ${mainRed};
                    transition: all .35s ease;
                }
                .nav-logo {
                    width:100px;
                }
            `}
        />
    ) 
}

export default Base
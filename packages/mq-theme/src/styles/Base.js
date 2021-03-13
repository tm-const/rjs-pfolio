import React from  "react";
import {connect, Global, css} from "frontity";

const Base = ({state}) => {

    const {isDarkModeOn} = state.theme;

    // Literal Strings
    const mainWhite = '#FFFFFF';
    const mainBlack = '#000000';
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
                    background-color: ${isDarkModeOn === true ? mainBlack: mainWhite};
                    color:${isDarkModeOn === true ? mainWhite: mainBlack};
                }
                a {
                    font-weight: bolder;
                    color:${isDarkModeOn === true ? mainWhite: mainBlack};
                    text-decoration:none;
                }
                a:hover {
                    color: ${mainRed};
                    transition: all .35s ease;
                }
                .nav-logo {
                    width:100px;
                }
                .dark-mode-text-state {
                    color:${isDarkModeOn === true ? mainWhite : mainBlack};
                }
            `}
        />
    ) 
}

export default connect(Base)
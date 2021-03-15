import React from  "react";
import {connect, Global, css} from "frontity";

const Base = ({state}) => {

    const {isDarkModeOn} = state.theme;

    // Literal Strings
    const mainWhite = '#FFFFFF';
    const mainBlack = '#000000';
    const mainRed = '#f2322b';
    const mainGrey = '#c2c4c9';

    return (
        <Global
            styles = { css`
                @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,200&display=swap');

                html{
                    font-family: 'IBM Plex Mono', monospace;
                }
                body {
                    margin:0;
                    padding:0;
                    background-color: ${isDarkModeOn === true ? mainBlack: mainWhite};
                    color:${isDarkModeOn === true ? mainWhite: mainBlack};

                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
                a {
                    color:${isDarkModeOn === true ? mainGrey: mainBlack};
                    text-decoration:none;
                }
                a:hover {
                    color: ${mainWhite};
                    transition: all .35s ease;
                }
                .nav-logo {
                    width:100px;
                }
                .dark-mode-text-state {
                    color:${isDarkModeOn === true ? mainWhite : mainBlack};
                }

                /* Archiove List Card */
                .archive-card {
                    width:100%;
                    border-bottom: 1px solid rgba(48,52,60,0.75);
                }

            `}
        />
    ) 
}

export default connect(Base)
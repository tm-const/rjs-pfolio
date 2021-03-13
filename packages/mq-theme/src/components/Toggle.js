import React from "react";
import {connect, styled, css} from "frontity";
import Sun from "../assets/sun.svg"
import Moon from "../assets/night.svg"

const Toggle = ({state, actions}) => {
    const {isDarkModeOn} = state.theme;
    const {setDarkModeOn} = actions.theme;
    const {setDarkModeOff} = actions.theme;

    if (isDarkModeOn === true) {
        return <ButtonStyled onClick={setDarkModeOff} className="dark-mode-text-state"><img src={Sun} />Light</ButtonStyled>
    } else {
        return <ButtonStyled onClick={setDarkModeOn} className="dark-mode-text-state"><img src={Moon} />Dark</ButtonStyled>
    }
}

const ButtonStyled = styled.button`
    background-color:transparent;
    border:none;
    outline:none;
    font-size:7px;
    letter-spacing:2px;
    text-transform:uppercase;
    line-height:18px;
    cursor: pointer;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    & img {
        width:25px;
    }
`;

export default connect(Toggle)
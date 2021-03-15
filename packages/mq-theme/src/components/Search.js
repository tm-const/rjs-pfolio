import { connect, styled, css } from "frontity";
import React from "react";

const Search = ({state, actions}) => {
    return(
        <>
            <ArchiveSearchNav>
                <button>Test</button>
                <input 
                    type="text"
                    placeholder="Search for movie..."
                    value={state.theme.searchInputValue}
                    onChange={event => {
                        actions.theme.setSearchInputValue(event.target.value)
                    }}
                />
            </ArchiveSearchNav>
        </>
    )
}

const ArchiveSearchNav = styled.div`
    border-bottom: 1px solid rgba(48,52,60,0.6);
    background-color: rgba(32,35,40,0.5);
    width:100%;
    height:50px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export default connect(Search);
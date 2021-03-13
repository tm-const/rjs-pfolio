import { connect } from "frontity";
import React from "react";

const Search = ({state, actions}) => {
    return(
        <>
            <input 
                type="text"
                placeholder="Search for movie..."
                value={state.theme.searchInputValue}
                onChange={event => {
                    actions.theme.setSearchInputValue(event.target.value)
                }}
            />
            <pre>Search value: {state.theme.searchInputValue}</pre>
        </>
    )
}

export default connect(Search);
import React from "react";
import { connect } from "frontity";


const Featured = ({ state, imgID, element }) => {

    const movie = state.source.attachment[imgID];

    return element === 'movies' && (
        <>
            <img src={movie.media_details.sizes.medium_large.source_url} alt={movie.alt_text}/>
        </>
    )   
}

export default connect(Featured);
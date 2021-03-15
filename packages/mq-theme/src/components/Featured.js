import React from "react";
import { connect, styled, css } from "frontity";


const Featured = ({ state, imgID, element }) => {

    const movie = state.source.attachment[imgID];

    return element === 'movies' && (
        <>
            <FeaturedImage src={movie.media_details.sizes.medium_large.source_url} alt={movie.alt_text} />
        </>
    )   
}

const FeaturedImage = styled.img`
    width:100%;
`;

export default connect(Featured);
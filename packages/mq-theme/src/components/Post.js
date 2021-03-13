import React from "react";
import { connect } from "frontity";
import Link from "./Link";
import Featured from "./Featured"


const Post = ( {state, element, imgID} ) => {
    const data = state.source.get(state.router.link);
    const movies = state.source[data.type][data.id];

    if(element === 'movie') {
        return (
            <>
                <Link href="/movies" exact>Back</Link>

                <Featured 
                    imgID={movies.featured_media} 
                    element="movies"
                ></Featured>

                <h2 dangerouslySetInnerHTML={{__html: movies.title.rendered}}></h2>
                <div dangerouslySetInnerHTML={{__html: movies.content.rendered}}></div>
            </>
        )
    } else {
        return (
            <p>Im' not a movie</p>
        )
    }
}

export default connect(Post);
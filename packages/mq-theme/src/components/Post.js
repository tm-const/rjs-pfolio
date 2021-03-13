import React from "react";
import { connect } from "frontity";
import Link from "./Link";
import Featured from "./Featured"


const Post = ( {state, element, imgID} ) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    if(element === 'movie') {
        const movieC = post.categories[0];
        const movieCategories = state.source.category[movieC];

        return (
            <>
                <Link href="/movies" exact>Back</Link>

                <Featured 
                    imgID={post.featured_media} 
                    element="movies"
                ></Featured>

                <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
                <span>Category: {movieCategories.name}</span>
                <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>
            </>
        )
    } else {
        return (
            <p>Im' not a movie</p>
        )
    }
}

export default connect(Post);
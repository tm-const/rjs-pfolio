import React from "react";
import { connect, styled, css } from "frontity";
import Link from "./Link";
import Featured from "./Featured"
import Search from "./Search"
import Archives from "../components/Archives";


const Post = ( {state, element, imgID} ) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];

    if(element === 'movie') {
        const movieC = post.categories[0];
        const movieCategories = state.source.category[movieC];

        return (
            <>

            <MainArchiveWrapper>
              <Search />
              <Archives />
            </MainArchiveWrapper>

            <MainContentWrapper>

                <Link href="/" exact>Back</Link>

                <Featured 
                imgID={post.featured_media} 
                element="movies"
                ></Featured>

                <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}}></h2>
                <span>Category: {movieCategories.name}</span>
                <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>

            </MainContentWrapper>
            </>
        )
    } else {
        return (
            <p>Im' not a movie</p>
        )
    }
}


const MainArchiveWrapper = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items: flex-start;
  flex-direction:column;

  width:49%;
`;

const MainContentWrapper = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items: flex-start;
  flex-direction:column;

  width:49%;
`;

export default connect(Post);
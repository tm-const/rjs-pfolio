import React from "react";
import { connect, styled, css } from "frontity";
import Search from "../components/Search";
import Archives from "../components/Archives";


const Movies = ({state, actions}) => {

    return(
      <>
      <MainArchiveWrapper>

          <Search />
          <Archives />

        </MainArchiveWrapper>

        <MainContentWrapper>

          test

        </MainContentWrapper>
      </>
    )
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

export default connect(Movies);
import React, { Component } from 'react';
import { WIWrapper, WordWrapper, SearchBar, WordContainer, 
  ExtraWrapper, WordCell, CellHeader, CellForm } from '../styles/WordInstance.style';

class WordInstance extends Component {
  render() {
    return (
      <WIWrapper>
        <WordContainer>
          <WordWrapper>
            <WordCell borderSize="0px 1px 1px 0px" >
              <CellForm>Present</CellForm>
            </WordCell> 
            <WordCell borderSize="0px 0px 1px 0px">
              <CellHeader>Positive</CellHeader>
            </WordCell> 
            <WordCell borderSize="0px 0px 1px 0px">
              <CellHeader>Negative</CellHeader>
            </WordCell> 
            <WordCell borderSize="0px 1px 0px 0px">
              <CellHeader>Plain</CellHeader>
            </WordCell> 
            <WordCell>食べる</WordCell> 
            <WordCell>食べない</WordCell> 
            <WordCell borderSize="0px 1px 0px 0px">
              <CellHeader>Negative</CellHeader>
            </WordCell> 
            <WordCell>食べます</WordCell> 
            <WordCell>食べません</WordCell> 
          </WordWrapper>
          <ExtraWrapper>
          </ExtraWrapper>
        </WordContainer>
      </WIWrapper> 
    );
  }
}

export default WordInstance;
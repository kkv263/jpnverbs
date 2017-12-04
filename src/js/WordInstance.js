import React, { Component } from 'react';
import { WIWrapper, WordWrapper, SearchBar, WordContainer, ExtraWrapper, WordCell } from '../styles/WordInstance.style';

class WordInstance extends Component {
  render() {
    return (
      <WIWrapper>
        <WordContainer>
          <WordWrapper>
            <WordCell gridColumn='1 / 4'>present</WordCell> 
            <div></div> 
            <div>postive</div> 
            <div>negative</div> 
            <div>plain</div> 
            <div>食べる</div> 
            <div>食べない</div> 
            <div>polite</div> 
            <div>食べます</div> 
            <div>食べない</div> 
          </WordWrapper>
          <ExtraWrapper>
          </ExtraWrapper>
        </WordContainer>
      </WIWrapper> 
    );
  }
}

export default WordInstance;
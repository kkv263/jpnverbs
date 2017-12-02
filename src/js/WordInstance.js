import React, { Component } from 'react';
import { WIWrapper, WordWrapper, SearchBar } from '../styles/WordInstance.style';

class WordInstance extends Component {
  render() {
    return (
      <WIWrapper>
        <SearchBar></SearchBar>
        <WordWrapper>
          <div></div> 
          <div></div> 
          <div></div> 
        </WordWrapper>
      </WIWrapper> 
    );
  }
}

export default WordInstance;